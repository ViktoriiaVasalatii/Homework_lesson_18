const category = Array.prototype.slice.call(document.querySelectorAll(".category_items"));
const goodsBlock = Array.prototype.slice.call(document.querySelectorAll(".goods_block_items"));
const aboutBlock = document.querySelector(".about_goods_block");
const button = document.querySelector(".button_buy");

console.log(category);
console.log(goodsBlock);
console.log(aboutBlock);

for (let i = 0; i < category.length; i++) {
    category[i].addEventListener("click", () => {
        console.log("aiuerh");
        goodsBlock[i].classList.remove('hide');
    })
}
for (let i = 0; i < goodsBlock.length; i++) {
    goodsBlock[i].addEventListener("click", () => {
        console.log("eeeeeeeeeeee");
        aboutBlock.classList.remove('hide');
    })
}

for (let i = 0; i < 10; i++) {
    button.addEventListener("click", () => {
        goodsBlock[i].classList.add("hide")
        aboutBlock.classList.add("hide")
    })
}
