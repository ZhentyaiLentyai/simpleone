function modal__toggleDropdownName() {
    const menu = document.getElementById('modal__dropdownMenuResponsible');
    menu.classList.toggle("show");
}

function modal__selectName(name) {
    const nameBlock = document.getElementById("modal__selectedNameBlock");
    nameBlock.textContent = name; 
    nameBlock.style.display = "block";

    modal__hideDropdownName();
}

function modal__hideDropdownName() {
    const menu = document.getElementById('modal__dropdownMenuResponsible');
    menu.classList.remove("show");
}

function modal__clearInputName() {
    const input = document.getElementById("modal__nameInput");
    input.value = '';

    const nameBlock = document.getElementById("modal__selectedNameBlock");
    nameBlock.style.display = "none"; 

    modal__hideDropdownName();
}