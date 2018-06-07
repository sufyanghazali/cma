// const menu = document.querySelector('.menu-btn');
// const menuItems = document.querySelector('.menu-items');
// const exitMenu = document. querySelector('.exit-menu');
// const overlay = document. querySelector('.overlay');
//
// const navlinks = document.querySelectorAll('.navlinks a');
//
// menu.addEventListener('click', function() {
//   menuItems.classList.add('show');
//   overlay.classList.add('show');
// });
//
// exitMenu.addEventListener('click', function() {
//   menuItems.classList.remove('show');
//   overlay.classList.remove('show');
// });
//
// overlay.addEventListener('click', function() {
//   menuItems.classList.remove('show');
//   overlay.classList.remove('show');
// });

const menu = $('.menu-btn');
const menuItems = $('.menu-items');
const exitMenu = $('.exit-menu');
const overlay = $('.overlay');
const navlinks = document.querySelectorAll('.navlink a')
const url = window.location.pathname;
const body = document.querySelector('body');

menu.on('click', function() {
  menuItems.slideDown();
  overlay.show();
  body.classList.add('disable-scroll');
});

exitMenu.on('click', function() {
  menuItems.slideUp();
  overlay.hide();
  body.classList.remove('disable-scroll');
})

overlay.on('click', function() {
  menuItems.slideUp();
  overlay.hide();
  body.classList.remove('disable-scroll');
})

for (let i = 0; i < navlinks.length; i++) {
  if (url.endsWith(navlinks[i].getAttribute('href'))) {
    navlinks[i].classList.add('selected');
  }
}
