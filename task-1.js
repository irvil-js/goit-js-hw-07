const categoryEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryEl.length} категории.`);


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