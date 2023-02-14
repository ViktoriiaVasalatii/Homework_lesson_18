const list = document.querySelector('.list');
list.addEventListener('click', function (event) {
    const trigger = event.target.closest('span');
    if (trigger) {
        trigger.classList.toggle('hide');
    }
});

const mapLetterToNumber = ["Третій", "Четвертий", "П'ятий", "Шостий", "Сьомий", "Восьмий", "Дев'ятий", "Десятий"];
let counterUl = 0;
let valueLi = 8;
const listAdd = document.querySelector('#list-add');
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
            li.setAttribute("class", "maybeRemove");
            list.appendChild(li);
    }
    counterUl++
})
const remove = document.querySelector('.maybeRemove');
const listRemove = document.querySelector('#list-remove');
// remove.addEventListener('dblclick', function(event){
    listRemove.addEventListener('dblclick', function(event){
    // console.log("li");
remove.remove();
})


// Advanced: зробити видалення списку і врахувати коректність нумерації після видалення.