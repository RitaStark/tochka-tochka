'use strict';
var tempWrapper = document.querySelector('.temperature__wrapper');
var tempCheckbox = document.querySelector('.goods__item-checkbox');
console.log(tempWrapper)



tempCheckbox.addEventListener('click', function () {
  if (tempCheckbox.checked) {
    tempWrapper.classList.remove('visually-hidden');
    tempWrapper.classList.add('visible');
  } else {
    tempWrapper.classList.remove('visible');
    tempWrapper.classList.add('visually-hidden');
  }
});


document.querySelectorAll('.transport__select').forEach(function (elem) {
  new SlimSelect({
    showSearch: false,
    select: elem,
  });
});

document.querySelectorAll('.goods__select').forEach(function (elem) {
  new SlimSelect({
    showSearch: false,
    select: elem,
  });
})


