window.onscroll = function (e) {
  var sliderHeight = document.querySelector('.slider').offsetHeight
  var aside = document.querySelector('aside')
  if (window.pageYOffset >= sliderHeight) {
    aside.classList.remove('hidden')
  } else {
    aside.classList.add('hidden')
  }
}