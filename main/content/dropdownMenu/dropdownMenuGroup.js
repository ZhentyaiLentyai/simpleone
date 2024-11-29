function toggleDropdownGroup() {
    const menu = document.getElementById('dropdownMenuGroup');
    menu.classList.toggle("show");
}

function selectGroup(group) {
    const groupBlock = document.getElementById("selectedGroupBlock");
    groupBlock.textContent = group; 
    groupBlock.style.display = "block";

    hideDropdownGroup();
}

function hideDropdownGroup() {
    const menu = document.getElementById('dropdownMenuGroup');
    menu.classList.remove("show");
}

function clearInputGroup() {
    const input = document.getElementById("groupInput");
    input.value = '';

    const groupBlock = document.getElementById("selectedGroupBlock");
    groupBlock.style.display = "none"; 

    hideDropdownGroup();
}
