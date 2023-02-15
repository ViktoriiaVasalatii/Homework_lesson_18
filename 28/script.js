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

function addList() {
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
    counterUl++;

    const removeItem = Array.prototype.slice.call(document.querySelectorAll('.maybeRemove')); // масив з li
    console.log(removeItem);
}

// function deleteList(){
//     for(let i =0; i< removeItem; i++){
//         removeItem[i].remove();
//     }
//     console.log(removeItem);
// }

listAdd.addEventListener('click', addList);

// for (let i = 0; i < 6; i++) {
//     removeItem[i].addEventListener('dblclick', deleteList)
// }

// removeItem.addEventListener('dblclick', function (event) {
//     console.log("double click");
//     // listRemove.addEventListener('dblclick', function (event) {
//     // console.log("li");
//     // removeItem.remove();
//     // }
// })


// Advanced: зробити видалення списку і врахувати коректність нумерації після видалення.