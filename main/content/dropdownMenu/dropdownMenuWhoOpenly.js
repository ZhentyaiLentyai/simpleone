function toggleDropdownWhoOpenly() {
    const menu = document.getElementById('dropdownMenuWhoOpenly');
    menu.classList.toggle("show");
}

function selectWhoOpenly(name) {
    const nameBlock = document.getElementById("selectedWhoOpenlyBlock");
    nameBlock.textContent = name; 
    nameBlock.style.display = "block";

    hideDropdownWhoOpenly();
}

function hideDropdownWhoOpenly() {
    const menu = document.getElementById('dropdownMenuWhoOpenly');
    menu.classList.remove("show");
}

function clearInputWhoOpenly() {
    const input = document.getElementById("whoOpenlyInput");
    input.value = '';

    const nameBlock = document.getElementById("selectedWhoOpenlyBlock");
    nameBlock.style.display = "none"; 

    hideDropdownWhoOpenly();
}
