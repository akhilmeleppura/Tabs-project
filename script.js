const navbar = document.getElementById('navbar');
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove('scrolled');
  } else {
    navbar.classList.add('scrolled');
  }
  prevScrollpos = currentScrollPos;
};
