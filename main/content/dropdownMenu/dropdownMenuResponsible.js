function toggleDropdownName() {
    const menu = document.getElementById('dropdownMenuResponsible');
    menu.classList.toggle("show");
}

function selectName(name) {
    const nameBlock = document.getElementById("selectedNameBlock");
    nameBlock.textContent = name; 
    nameBlock.style.display = "block";

    hideDropdownName();
}

function hideDropdownName() {
    const menu = document.getElementById('dropdownMenuResponsible');
    menu.classList.remove("show");
}

function clearInputName() {
    const input = document.getElementById("nameInput");
    input.value = '';

    const nameBlock = document.getElementById("selectedNameBlock");
    nameBlock.style.display = "none"; 

    hideDropdownName();
}