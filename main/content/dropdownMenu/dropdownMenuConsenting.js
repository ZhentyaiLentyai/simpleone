// Функция для показа/скрытия выпадающего списка для согласующих
function toggleDropdownConsenting() {
    const menu = document.getElementById('dropdownMenuСonsenting');
    menu.classList.toggle("show");
}

// Функция для выбора согласующего из списка
function selectСonsenting(consenting) {
    const newBlock = document.createElement('div');
    newBlock.classList.add('consenting-item-block');

    const newConsenting = document.createElement('div');
    newConsenting.classList.add('selected-consenting-item');
    newConsenting.textContent = consenting;

    newBlock.appendChild(newConsenting);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-consenting-btn');
    deleteButton.innerHTML = '<img src="../img/Close.svg" alt="delete">';
    deleteButton.onclick = function () {
        newBlock.remove();
        updateConsentingCount();
    };

    newBlock.appendChild(deleteButton);

    const consentingContainer = document.getElementById("consentingContainer");
    const inputElement = document.getElementById("consentingInput");

    consentingContainer.insertBefore(newBlock, inputElement);

    updateConsentingCount();
    hideDropdownConsenting();
}

// Функция для скрытия выпадающего списка для согласующих
function hideDropdownConsenting() {
    const menu = document.getElementById('dropdownMenuСonsenting');
    menu.classList.remove("show");
}

// Функция для очистки поля ввода согласующих
function clearInputConsenting() {
    const input = document.getElementById("consentingInput");
    input.value = '';

    const consentingContainer = document.getElementById("consentingContainer");
    const blocks = consentingContainer.querySelectorAll('.consenting-item-block');
    blocks.forEach(block => block.remove());

    updateConsentingCount();
    hideDropdownConsenting();
}

// Функция для обновления количества согласующих
function updateConsentingCount() {
    const consentingContainer = document.getElementById("consentingContainer");
    const countElement = document.getElementById("consentingCount");

    const count = consentingContainer.querySelectorAll('.consenting-item-block').length;

    if (countElement) {
        countElement.textContent = `Выбрано: ${count}`;
    }
}
