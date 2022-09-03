const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var button = document.querySelector('.button-menu__button'),
  twobutton = document.querySelector('.button-reccomend'),
  popup = document.querySelector('.popup'),
  closePopUp = document.querySelector('.close-forms__button');


button.addEventListener('click', openPop);
twobutton.addEventListener('click', openPop);
closePopUp.addEventListener('click', closePop);

function openPop(e) {
  popup.classList.add('active')
  e.preventDefault()
}

function closePop(e) {
  popup.classList.remove('active')
  e.preventDefault()
}