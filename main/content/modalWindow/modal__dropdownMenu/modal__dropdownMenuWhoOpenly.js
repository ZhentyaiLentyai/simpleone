function modal__toggleDropdownWhoOpenly() {
    const menu = document.getElementById('modal__dropdownMenuWhoOpenly');
    menu.classList.toggle("show");
}

function modal__selectWhoOpenly(name) {
    const nameBlock = document.getElementById("modal__selectedWhoOpenlyBlock");
    nameBlock.textContent = name; 
    nameBlock.style.display = "block";

    modal__hideDropdownWhoOpenly();
}

function modal__hideDropdownWhoOpenly() {
    const menu = document.getElementById('modal__dropdownMenuWhoOpenly');
    menu.classList.remove("show");
}

function modal__clearInputWhoOpenly() {
    const input = document.getElementById("modal__whoOpenlyInput");
    input.value = '';

    const nameBlock = document.getElementById("modal__selectedWhoOpenlyBlock");
    nameBlock.style.display = "none"; 

    modal__hideDropdownWhoOpenly();
}
