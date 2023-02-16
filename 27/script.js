const imageFromFolder = {
    1: "image1",
    2: "image2",
    3: "image3",
    4: "image4",
    5: "image5",
    6: "image6",
    7: "image7",
};
let image = document.querySelector("#image");
let button_pre = document.querySelector(".button_pre");
let button_next = document.querySelector(".button_next");
let counter = 4;

button_pre.addEventListener("click", function (event) {
    button_next.classList.remove("button_next_hide")
    if (counter > 1) {
        image.classList.remove(`${imageFromFolder[counter]}`);
        image.classList.add(`${imageFromFolder[--counter]}`);
    }
    if (counter == 1) {
        button_pre.classList.toggle("button_pre_hide")
    }
});

button_next.addEventListener("click", function (event) {
    button_pre.classList.remove("button_pre_hide")
    if (counter < 7) {
        image.classList.remove(`${imageFromFolder[counter]}`);
        image.classList.add(`${imageFromFolder[++counter]}`);
    }
    if (counter == 7) {
        button_next.classList.toggle("button_next_hide")
    }
});