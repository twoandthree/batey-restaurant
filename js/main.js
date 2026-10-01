document.addEventListener('DOMContentLoaded', () => {
  const appetizers = [
    { src: 'assets/images/selected/food/chicharron-presentado.jpeg', title: 'Chicharron' },
    { src: 'assets/images/selected/food/alcapurrias-2.jpeg', title: 'Alcapurrias' },
    { src: 'assets/images/selected/food/amarillos.jpeg', title: 'Amarillos' },
    { src: 'assets/images/selected/food/vasito-mixto.jpeg', title: 'Vasito Mixto' },
    { src: 'assets/images/selected/food/bolitas-de-queson.jpeg', title: 'Bolitas de Queson' },
    { src: 'assets/images/selected/food/tostones.jpeg', title: 'Tostones' },
    { src: 'assets/images/selected/food/yuka-frita.jpeg', title: 'Yuka Frita' },
  ];

  const entrees = [
    { src: 'assets/images/selected/food/cacique.jpeg', title: 'Cacique' },
    { src: 'assets/images/selected/food/camaron.jpeg', title: 'Camaron' },
    { src: 'assets/images/selected/food/carne-frita.jpeg', title: 'Carne Frita' },
    { src: 'assets/images/selected/food/canoa.jpeg', title: 'Canoa' },
    { src: 'assets/images/selected/food/Striploin-rice-beans.jpeg', title: 'Striploin' },
    { src: 'assets/images/selected/food/seafood-paella.jpeg', title: 'Seafood Paella' },
    { src: 'assets/images/selected/food/grilled-chicken-breast.jpeg', title: 'Grilled Chicken Breast' },
    { src: 'assets/images/selected/food/barenjena.jpeg', title: 'Barenjena' },    
  ];

  const desserts = [
    { src: 'assets/images/selected/food/dessert.jpeg', title: 'Quesito con Fresa' },
    { src: 'assets/images/selected/food/Flan.jpg', title: 'Flan' },
    { src: 'assets/images/selected/food/pastel-de-guayaba.jpg', title: 'Pastel de Guayaba' },
    { src: 'assets/images/selected/food/bebidas.jpeg', title: 'Bebidas' },
  ];

  const interior = [
  { src: 'assets/images/selected/restaurant/full-building-shot.jpeg', title: '' },
  { src: 'assets/images/selected/restaurant/outside-entrance-shot.jpeg', title: '' },
  { src: 'assets/images/selected/restaurant/entrance-shot.jpeg', title: '' },
  { src: 'assets/images/selected/restaurant/bar.jpeg', title: '' },
];

  function setupCarousel(sectionId, dishesArray) {
    const section = document.getElementById(sectionId)?.closest('.carousel-section');
    if (!section) return;

    const carousel = section.querySelector('.carousel-container');
    const prevBtn = section.querySelector('.prev-btn');
    const nextBtn = section.querySelector('.next-btn');

    // Populate items
    dishesArray.forEach((dish, index) => {
      const heightClass = index % 2 === 0 ? 'item-high' : 'item-low';
      const item = document.createElement('div');
      item.className = `carousel-item ${heightClass}`;
      item.innerHTML = `
        <div class="carousel-img-wrapper">
          <img src="${dish.src}" alt="${dish.title}" class="carousel-img">
        </div>
        <span class="dish-title">${dish.title}</span>
      `;
      carousel.appendChild(item);
    });

    // Arrow Click Handlers (scrolls by the width of one card + gap)
    const scrollAmount = 350; 

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }
  }

  setupCarousel('appetizersCarousel', appetizers);
  setupCarousel('entreesCarousel', entrees);
  setupCarousel('dessertsCarousel', desserts);
  setupCarousel('atmosphere', interior);
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Optional: Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});