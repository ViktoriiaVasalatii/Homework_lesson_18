const list = document.querySelector('.list');
list.addEventListener('click', function (event) {
    const trigger = event.target.closest('span');
    if (trigger) {
        trigger.classList.toggle('hide');
    }
});
const mapLetterToNumber = ["Третій", "Четвертий", "П'ятий", "Шостий", "Сьомий", "Восьмий", "Дев'ятий", "Десятий"];

const listAdd = document.querySelector('#list-add');
let counterUl = 0;
let valueLi = 8;
listAdd.addEventListener('click', function (event) {
    if (counterUl < 8) {
        const li = document.createElement('li');
        let valueUl = mapLetterToNumber[counterUl];
            li.innerHTML = `<span class="hide">` +
                `${valueUl} список</span>` +
                `<ul>` +
                `<li>${++valueLi} елемент списку</li>` +
                `<li>${++valueLi} елемент списку</li>` +
                `<li>${++valueLi} елемент списку</li>` +
                `<li>${++valueLi} елемент списку</li>` +
                `</ul>`
            list.appendChild(li);
    }
    counterUl++
})
