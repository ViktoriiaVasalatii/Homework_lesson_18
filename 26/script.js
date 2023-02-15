const icons = document.querySelectorAll(".icon");
const arrayIcons = Array.prototype.slice.call(icons); //перетворення NodeList в Array
const wrapperCounter = document.querySelectorAll(".wrapper_counter");
const arrayWrapperCounter = Array.prototype.slice.call(wrapperCounter); 

for (let i = 0; i < arrayIcons.length; i++) {
    let value = +arrayWrapperCounter[i].innerText;
    icons[i].addEventListener("click", () => {
        value = value + 1;
        arrayWrapperCounter[i].innerText = value;
    })
}




