const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.header__menu'),
menuLink = document.querySelectorAll('.menu__link'),
form = document.querySelector('.form'),
formSelectList = form.querySelector('.input-select__list'),
formSelectItems = form.querySelectorAll('.input-select__item'),
formSelectBtn = form.querySelector('.input-select__button'),
formSelectArrow = form.querySelector('.input-select__arrow'),
formSelectInput = form.querySelector('.input-select__input'),
formPecentInput = form.querySelector('.input-percent__input'),
formPecentValue = form.querySelector('.input-percent__value'),
formFileInput = form.querySelector('.input-file__input');
formFileLabel = form.querySelector('.input-file__label'),

//menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
    });
});

//dropdown
function toggleClass(element, elementClass) {
    element.classList.toggle(elementClass);
};

formSelectBtn.addEventListener('click', function(e) {
    e.preventDefault();

    toggleClass(formSelectBtn, 'input-select__button_active');
    toggleClass(formSelectArrow, 'input-select__arrow_active');
    toggleClass(formSelectList, 'input-select__list_active');
});

formSelectItems.forEach(function(item) {
    item.addEventListener('click', function() {
        formSelectBtn.innerHTML = this.innerHTML;
        toggleClass(formSelectBtn, 'input-select__button_active');
        toggleClass(formSelectArrow, 'input-select__arrow_active');
        toggleClass(formSelectList, 'input-select__list_active');
        formSelectInput.value = this.dataset.value;
    });
});

//slider
formPecentInput.addEventListener('input', function() {
    formPecentValue.innerHTML = formPecentInput.value + '%';
});

//files
formFileInput.addEventListener('change', function() {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

    if (countFiles == 1)
        formFileLabel.innerHTML = this.files[0].name;
    else if (countFiles > 1)
        formFileLabel.innerHTML = 'Выбрано ' + countFiles + ' файлов';
    else false;
});