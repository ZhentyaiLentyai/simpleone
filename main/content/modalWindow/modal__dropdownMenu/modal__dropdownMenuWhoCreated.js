function modal__toggleDropdownWhoCreated() {
    const menu = document.getElementById('modal__dropdownMenuWhoCreated');
    menu.classList.toggle("show");
}

function modal__selectWhoCreated(name) {
    const nameBlock = document.getElementById("modal__selectedWhoCreatedBlock");
    nameBlock.textContent = name;
    nameBlock.style.display = "block";

    modal__hideDropdownWhoCreated();
}

function modal__hideDropdownWhoCreated() {
    const menu = document.getElementById('modal__dropdownMenuWhoCreated');
    menu.classList.remove("show");
}

function modal__clearInputWhoCreated() {
    const input = document.getElementById("modal__whoCreatedInput");
    input.value = '';

    const nameBlock = document.getElementById("modal__selectedWhoCreatedBlock");
    nameBlock.style.display = "none";

    modal__hideDropdownWhoCreated();
}
