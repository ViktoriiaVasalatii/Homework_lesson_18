const category = Array.prototype.slice.call(document.querySelectorAll(".category_items"));
const goodsBlock = Array.prototype.slice.call(document.querySelectorAll(".goods_block_items"));
const goodsBlockItem = Array.prototype.slice.call(document.querySelectorAll(".goods_item"));
const aboutBlock = document.querySelector(".about_goods_block");
const button = document.querySelector(".button_buy");
const arrayImage = Array.prototype.slice.call(document.querySelectorAll(".image"));
const arrayTitle = Array.prototype.slice.call(document.querySelectorAll(".title_items"));

for (let i = 0; i < category.length; i++) {
    category[i].addEventListener("click", () => {
        goodsBlock[i].classList.toggle('hide');
    })
}

for (let i = 0; i < goodsBlockItem.length; i++) {
    goodsBlockItem[i].addEventListener("click", () => {
        aboutBlock.classList.toggle('hide');
        document.querySelector(".title_items_big").innerText = arrayTitle[i].innerText;
        document.querySelector(".image_big").src = arrayImage[i].src;
    })
    button.addEventListener("click", () => {
        goodsBlock[i].classList.add("hide");
        aboutBlock.classList.add("hide");
    })
}

button.addEventListener("click", () => {
    alert("Товар куплений");
})
