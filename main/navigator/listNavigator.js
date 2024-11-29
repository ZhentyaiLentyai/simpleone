const categories = [
    { text: "Моя работа", icon: "../img/Arrow.svg" },
    { text: "Структура портала", icon: "../img/Arrow.svg" },
    { text: "Личное расписание", icon: "../img/Arrow.svg" },
    { text: "Отсутствие на рабочем месте", icon: "../img/Arrow.svg" },
    { text: "Портфель услуг", icon: "../img/Arrow.svg" },
    { text: "Дашборды", icon: "../img/Arrow.svg" },
    { text: "Доски задач", icon: "../img/Arrow.svg" },
    { text: "Обращения", icon: "../img/Arrow.svg" },
    { text: "События", icon: "../img/Arrow.svg" },
    { text: "Инциденты", icon: "../img/Arrow.svg" },
    { text: "Проблемы", icon: "../img/Arrow.svg" },
    { text: "Настройка каталогов", icon: "../img/Arrow.svg" },
    { text: "Запросы на обслуживание", icon: "../img/Arrow.svg" },
    { text: "Запросы на изменение", icon: "../img/Arrow.svg" },
    { text: "Уапрвление конфигурациями", icon: "../img/Arrow.svg" },
    { text: "Управление уровнем услуг", icon: "../img/Arrow.svg" },
    { text: "Настройка соответствий", icon: "../img/Arrow.svg" },

  ];

  // Функция для генерации списка
  function generateList(categories) {
    const listContainer = document.getElementById('listNavigator');
    
    categories.forEach(category => {
      const button = document.createElement('button');
      button.classList.add('button__category');
      
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category');

      const img = document.createElement('img');
      img.src = category.icon;
      img.alt = 'arrow';

      const categoryText = document.createElement('div');
      categoryText.classList.add('category-text');
      const p = document.createElement('p');
      p.textContent = category.text;

      categoryText.appendChild(p);
      categoryDiv.appendChild(img);
      categoryDiv.appendChild(categoryText);
      button.appendChild(categoryDiv);

      listContainer.appendChild(button);
    });
  }

  generateList(categories);