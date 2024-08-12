let btnArrowLeft = document.querySelector('.arrow-left')
let btnArrowRight = document.querySelector('.arrow-right')
let sliders = document.querySelectorAll('.slide')
let imagemCurrent = 0

btnArrowLeft.addEventListener('click', () => {
    if (imagemCurrent === sliders.length - sliders.length) { 
      return opacityArrow()
    } else {
      hideImg(imagemCurrent)
      imagemCurrent--
      showImg(imagemCurrent)
      opacityArrow()
    }
  }
);

btnArrowRight.addEventListener('click', () => {
    if (imagemCurrent == sliders.length - 1) {
      return opacityArrow()
    } else {
      hideImg(imagemCurrent)
      imagemCurrent++
      showImg(imagemCurrent)
      opacityArrow()
    }
  }
);

function showImg(imagemCurrent) {
  sliders[imagemCurrent].classList.add('focus')
}

function hideImg(imagemCurrent) {
  sliders[imagemCurrent].classList.remove('focus')
}

function opacityArrow() {
  if (imagemCurrent == sliders.length - sliders.length)  {
    btnArrowLeft.classList.add('last')
  } else if (imagemCurrent <= sliders.length - 2) {
    btnArrowLeft.classList.remove('last')
    btnArrowRight.classList.remove('last')
  } else {
    btnArrowRight.classList.add('last')
  }
}