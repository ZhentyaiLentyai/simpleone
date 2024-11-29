function modal__toggleDropdownConsenting() {
    const menu = document.getElementById('modal__dropdownMenuСonsenting');
    menu.classList.toggle("show");
}

function modal__selectСonsenting(consenting) {
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
        modal__updateConsentingCount();
    };

    newBlock.appendChild(deleteButton);

    const consentingContainer = document.getElementById("modal__consentingContainer");
    const inputElement = document.getElementById("modal__consentingInput");

    consentingContainer.insertBefore(newBlock, inputElement);

    modal__updateConsentingCount();
    modal__hideDropdownConsenting();
}

function modal__hideDropdownConsenting() {
    const menu = document.getElementById('modal__dropdownMenuСonsenting');
    menu.classList.remove("show");
}

function modal__clearInputConsenting() {
    const input = document.getElementById("modal__consentingInput");
    input.value = '';

    const consentingContainer = document.getElementById("modal__consentingContainer");
    const blocks = consentingContainer.querySelectorAll('.consenting-item-block');
    blocks.forEach(block => block.remove());

    modal__updateConsentingCount();
    modal__hideDropdownConsenting();
}

function modal__updateConsentingCount() {
    const consentingContainer = document.getElementById("modal__consentingContainer");
    const countElement = document.getElementById("modal__consentingCount");

    const count = consentingContainer.querySelectorAll('.consenting-item-block').length;

    if (countElement) {
        countElement.textContent = `Выбрано: ${count}`;
    }
}
