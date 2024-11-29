function toggleDropdownWhoCreated() {
    const menu = document.getElementById('dropdownMenuWhoCreated');
    menu.classList.toggle("show");
}

function selectWhoCreated(name) {
    const nameBlock = document.getElementById("selectedWhoCreatedBlock");
    nameBlock.textContent = name;
    nameBlock.style.display = "block";

    hideDropdownWhoCreated();
}

function hideDropdownWhoCreated() {
    const menu = document.getElementById('dropdownMenuWhoCreated');
    menu.classList.remove("show");
}

function clearInputWhoCreated() {
    const input = document.getElementById("whoCreatedInput");
    input.value = '';

    const nameBlock = document.getElementById("selectedWhoCreatedBlock");
    nameBlock.style.display = "none";

    hideDropdownWhoCreated();
}
