const list = document.querySelector('.list');
const li = Array.prototype.slice.call(document.getElementsByTagName('li')); // масив з li вкладеного списку)
// const removeItem = document.querySelectorAll('.maybeRemove');

const removeItem = Array.prototype.slice.call(document.querySelectorAll('.maybeRemove')); // масив з li, які можна буде видаляти(1-го рівня)


const mapLetterToNumber = ["Третій", "Четвертий", "П'ятий", "Шостий", "Сьомий", "Восьмий", "Дев'ятий", "Десятий"];
let counterUl = 0;
let valueLi = 8;
const listAdd = document.querySelector('#list-add'); // кнопка 

list.addEventListener('click', function (event) {
    const trigger = event.target.closest('span');
    if (trigger) {
        trigger.classList.toggle('hide');
    }
});

for (let i = 0; i < li.length; i++) {
    // let valueLi = li[i].innerHTML[0]; // повинен був зчитувати нумерацію 
    function addList() {
        if (counterUl < 8) {
            const elementli = document.createElement('li');
            let valueUl = mapLetterToNumber[counterUl];
            elementli.innerHTML = `<span class="hide">` +
                `${valueUl} список</span>` +
                `<ul>` +
                `<li>${++valueLi} елемент списку</li>` +
                `<li>${++valueLi} елемент списку</li>` +
                `<li>${++valueLi} елемент списку</li>` +
                `<li>${++valueLi} елемент списку</li>` +
                `</ul>`
                elementli.setAttribute("class", "maybeRemove");
            list.appendChild(elementli);
            removeItem.push(elementli);
        }
        counterUl++;
    }

}

listAdd.addEventListener('click', addList);


for (let i = 0; i < removeItem.length; i++) {   //видаляє тільки створені елементи з самого початку 
    removeItem[i].addEventListener('dblclick', () => {

        removeItem[i].remove();
    })
}


// Advanced: зробити видалення списку і врахувати коректність нумерації після видалення.