const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const countSpan = document.getElementById('count');
const gridItems = document.querySelectorAll('.grid-item');
const questionsContent = document.querySelector('.questions-content');
const mainQuestions = document.querySelector('.main-questions');
const gridQuestions = document.querySelectorAll('.grid-quest');
const questAnimals = document.getElementById('animals');

// Функция, которая добавляет/удаляет класс 'active' при клике на элемент грида
function toggleActiveClass() {
    gridItems.forEach((item) => {
        item.addEventListener('click', function () {
            gridItems.forEach((gridItem) => {
                gridItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}
toggleActiveClass();

let currentPage = 1;
const itemsPerPage = 7;

function showItems(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    gridItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Инициализация отображения на первой странице
showItems(currentPage);

decrementBtn.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        countSpan.textContent = currentPage;
        showItems(currentPage);
    }
});

incrementBtn.addEventListener('click', function () {
    const maxPage = Math.ceil(gridItems.length / itemsPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        countSpan.textContent = currentPage;
        showItems(currentPage);
    }
});

// Добавление текста

//!Супер важно!!!!! ( НЕ требует корректировки)
gridItems.forEach((item) => {
    item.addEventListener('click', function () {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'question.html', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                questionsContent.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
});
