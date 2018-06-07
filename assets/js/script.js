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
const modal = $('.modal');
const modalOverlay = $('.modal-overlay');
const joinBtn = document.querySelector('#joinBtn');
const body = document.querySelector('body');
const navlinks = document.querySelectorAll('.navlink a');
const url = window.location.pathname;
const modalWrap = document.querySelector('.wrap-modal');

menu.on('click', () => {
  menuItems.slideDown();
  overlay.show();
  body.classList.add('disable-scroll');
});

exitMenu.on('click', () => {
  menuItems.slideUp();
  overlay.hide();
  body.classList.remove('disable-scroll');
});

overlay.on('click', () => {
  menuItems.slideUp();
  overlay.hide();
  body.classList.remove('disable-scroll');
});

joinBtn.addEventListener('click', () => {
  body.classList.add('disable-scroll');
  modal.fadeIn();
  modalWrap.classList.add('active-modal');
  modalOverlay.fadeIn();
});

modalOverlay.on('click', () => {
  body.classList.remove('disable-scroll');
  modal.fadeOut();
  modalWrap.classList.remove('active-modal');
  modalOverlay.fadeOut();
});

for (let i = 0; i < navlinks.length; i++) {
  if (url.endsWith(navlinks[i].getAttribute('href'))) {
    navlinks[i].classList.add('selected');
  }
}
