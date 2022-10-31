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
formPecentValue = form.querySelector('.form-input__percent-value'),
formFile = form.querySelector('.form-input__file'),
formFileLabel = formFile.querySelector('label'),
formFileInput = formFile.querySelector('input'),
formEmail = form.querySelector('.form-input__email'),
formEmailInput = formEmail.querySelector('input'),
formEmailLabel = formEmail.querySelector('label');
/* formName = form.querySelector('.form-input__name'),
formNameInput = formName.querySelector('input'),
formNameLabel = formName.querySelector('label'); */

//menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});

//dropdown
function toggleClass(element, elementClass) {
    element.classList.toggle(elementClass);
};

formSelectBtn.addEventListener('click', function(e) {
    e.preventDefault();

    toggleClass(formSelectBtn, 'form-input__select-button_active');
    toggleClass(formSelectArrow, 'form-input__select-arrow_active');
    toggleClass(formSelectList, 'form-input__select-list_active');
});

formSelectItems.forEach(function(item) {
    item.addEventListener('click', function() {
        formSelectBtn.innerHTML = this.innerHTML;
        toggleClass(formSelectBtn, 'form-input__select-button_active');
        toggleClass(formSelectArrow, 'form-input__select-arrow_active');
        toggleClass(formSelectList, 'form-input__select-list_active');
        formSelectInput.value = this.dataset.value;
    });
});

//inputs email and name
/* formEmailInput.addEventListener('click', function() {
    formEmailLabel.style.display = "none";
}); */

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