document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');
  const body = document.querySelector('body');
  const headerHide = document.querySelector('.header-content__main');

  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    if (menu.classList.contains('menu--open')) {
      menu.classList.remove('menu--open');
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      headerHide.style.opacity = '1';
    } else {
      menu.classList.add('menu--open');
      openIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      headerHide.style.opacity = '0';
    }
  });

  menu.addEventListener('click', function(event) {
    if (event.target === menu) {
      menu.classList.remove('menu--open');
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      body.classList.remove('no-scroll');
      headerHide.style.opacity = '1';
    }
  });
});
