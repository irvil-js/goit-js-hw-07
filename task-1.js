// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoryEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryEl.length} категории.`);

// 2й вариант решения
// Array.prototype.forEach.call(categoryEl, (element) => {
// const title = element.querySelector('h2').textContent;
//     const listLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${listLength}`);
// });

for (let elem of categoryEl) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \ Количество элементов: ${quantityElem}`);
};