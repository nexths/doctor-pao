// ==========================================
// 1. CONTROLE DO MENU HAMBÚRGUER (MOBILE)
// ==========================================
const btnMenu = document.getElementById('btn-menu');
const menuPrincipal = document.getElementById('menu-principal');

if (btnMenu && menuPrincipal) {
  btnMenu.addEventListener('click', () => {
    menuPrincipal.classList.toggle('open');
  });

  const linksMenu = document.querySelectorAll('.nav-menu a');
  linksMenu.forEach(link => {
    link.addEventListener('click', () => menuPrincipal.classList.remove('open'));
  });

  // Fechar menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!menuPrincipal.contains(e.target) && !btnMenu.contains(e.target)) {
      menuPrincipal.classList.remove('open');
    }
  });
}

// ==========================================
// 2. CONTROLE DA GALERIA LIGHTBOX
// ==========================================
const imagensGaleria = document.querySelectorAll('.galeria-img');
const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');
const btnFechar = document.querySelector('.lightbox-fechar');

if (imagensGaleria && lightbox && imgAmpliada) {
  imagensGaleria.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      imgAmpliada.src = img.src;
    });
  });

  if (btnFechar) {
    btnFechar.addEventListener('click', () => lightbox.style.display = 'none');
  }
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
}

// ==========================================
// 3. MOTOR SQUARESPACE PARA O FUNDO GLOBAL (.hero-bg)
// ==========================================
const bgImage = document.querySelector(".hero-bg img");

function ajustarFundoEstiloSQS() {
  if (!bgImage) return;

  // Mede as dimensões reais da área visível (viewport)
  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;
  
  // Obtém a proporção exata da foto original
  const proporcaoImagem = bgImage.naturalWidth / bgImage.naturalHeight;

  let novaLargura = larguraTela;
  let novaAltura = larguraTela / proporcaoImagem;

  // Aplica o algoritmo matemático de "cover" manual
  if (novaAltura < alturaTela) {
    novaAltura = alturaTela;
    novaLargura = alturaTela * proporcaoImagem;
  }

  // injeta os valores travados em pixels inteiros para blindar contra a barra do Chrome
  bgImage.style.width = Math.ceil(novaLargura) + "px";
  bgImage.style.height = Math.ceil(novaAltura) + "px";
}

// Executa assim que a imagem estiver totalmente carregada na memória
if (bgImage) {
  if (bgImage.complete) {
    ajustarFundoEstiloSQS();
  } else {
    bgImage.addEventListener("load", ajustarFundoEstiloSQS);
  }
}

// Escuta quando o usuário rotaciona o celular (único momento onde a largura realmente muda drasticamente)
window.addEventListener("orientationchange", () => {
  setTimeout(ajustarFundoEstiloSQS, 200);
});

// Trata o resize no computador de forma inteligente para não quebrar a performance
let resizeTimer;
let ultimaLarguraConhecida = window.innerWidth;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Só recalcula se a largura horizontal mudar (evita o "pulo" disparado pela variação de altura vertical no mobile)
    if (window.innerWidth !== ultimaLarguraConhecida) {
      ultimaLarguraConhecida = window.innerWidth;
      ajustarFundoEstiloSQS();
    }
  }, 150);
});