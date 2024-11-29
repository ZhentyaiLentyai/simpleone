function modal__toggleDropdownGroup() {
    const menu = document.getElementById('modal__dropdownMenuGroup');
    menu.classList.toggle("show");
}

function modal__selectGroup(group) {
    const groupBlock = document.getElementById("modal__selectedGroupBlock");
    groupBlock.textContent = group; 
    groupBlock.style.display = "block";

    modal__hideDropdownGroup();
}

function modal__hideDropdownGroup() {
    const menu = document.getElementById('modal__dropdownMenuGroup');
    menu.classList.remove("show");
}

function modal__clearInputGroup() {
    const input = document.getElementById("modal__groupInput");
    input.value = '';

    const groupBlock = document.getElementById("modal__selectedGroupBlock");
    groupBlock.style.display = "none"; 

    modal__hideDropdownGroup();
}
