
    // Controle do Menu Hambúrguer
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    btnMenu.addEventListener('click', () => {
      menuPrincipal.classList.toggle('open');
    });

    const linksMenu = document.querySelectorAll('.nav-menu a');
    linksMenu.forEach(link => {
      link.addEventListener('click', () => menuPrincipal.classList.remove('open'));
    });

    // Controle da Galeria Lightbox
    const imagensGaleria = document.querySelectorAll('.galeria-img');
    const lightbox = document.getElementById('lightbox');
    const imgAmpliada = document.getElementById('img-ampliada');
    const btnFechar = document.querySelector('.lightbox-fechar');

    imagensGaleria.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        imgAmpliada.src = img.src;
      });
    });

    btnFechar.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });

    // Fechar menu ao clicar fora dele
    document.addEventListener('click', (e) => {
      if (!menuPrincipal.contains(e.target) && !btnMenu.contains(e.target)) {
        menuPrincipal.classList.remove('open');
      }
    });

  type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Doctor Pão",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Pedro Romero, 111 - loja 01",
      "addressLocality": "Mogi das Cruzes",
      "addressRegion": "SP",
      "postalCode": "08810-370",
      "addressCountry": "BR"
    },
    "telephone": "+5511996061241"
  }