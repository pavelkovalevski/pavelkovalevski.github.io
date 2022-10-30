const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
menuLink = document.querySelectorAll('.menu__link'),
form = document.querySelector('.form'),
formSelectList = form.querySelector('.form-input__select-list'),
formSelectItems = form.querySelectorAll('.form-input__select-list-item'),
formSelectBtn = form.querySelector('.form-input__select-button'),
formSelectArrow = form.querySelector('.form-input__select-arrow'),
formSelectInput = form.querySelector('.form-input__select-input'),
formPecentInput = form.querySelector('.form-input__percent input'),
formPecentValue = form.querySelector('.form-input__percent-value');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});

formSelectBtn.addEventListener('click', function(e) {
    e.preventDefault();

    formSelectBtn.classList.toggle('form-input__select-button_active');
    formSelectArrow.classList.toggle('form-input__select-arrow_active');
    formSelectList.classList.toggle('form-input__select-list_active');
});

formSelectItems.forEach(function(item) {
    item.addEventListener('click', function() {
        formSelectBtn.innerHTML = this.innerHTML;
        formSelectBtn.classList.toggle('form-input__select-button_active');
        formSelectArrow.classList.toggle('form-input__select-arrow_active');
        formSelectList.classList.toggle('form-input__select-list_active');
        formSelectInput.value = this.dataset.value;
    });
});

formPecentInput.addEventListener('input', function() {
    formPecentValue.innerHTML = formPecentInput.value + '%';
});