// const vote = Array.prototype.slice.call(document.querySelectorAll(".voting_img"));
// function voteFor () {
//     const targetIndex = vote.indexOf(event.currentTarget);
//     const counter = +document.querySelectorAll(".voting_counter")[targetIndex].innerHTML;
//     const counterValue = counter + 1
//     document.querySelectorAll(".voting_counter")[targetIndex].innerHTML = counterValue
//     console.log(targetIndex);
// };

// for (let index = 0; index < vote.length; index++) {
//     vote[index].addEventListener('click', voteFor)
// }


// let icons = Array.prototype.slice.call(document.querySelectorAll(".icon"));

// console.log(icon);
// console.log(icons);
// for (let i = 0; i < icons.length; i++) {
//     console.log(icons[i]);
//     icons[i].addEventListener("click", () => {
//         const targetIndex = icons.indexOf(event.currentTarget); // звертається до конкретної іконки та повертає індекс 
//         // console.log((event.currentTarget));
//         const counter = document.querySelectorAll(".wrapper_counter")[targetIndex].innerHTML;
//         console.log(document.querySelectorAll(".wrapper_counter"));
//         console.log(+document.querySelectorAll(".wrapper_counter"));

//         const counterValue = +counter + 1;
//         document.querySelectorAll(".wrapper_counter")[targetIndex].innerHTML = counterValue;
//         // console.log(targetIndex);
//     });
// }
let wrapper = document.querySelectorAll(".wrapper_card");
// console.log(wrapper[1]);
// let icons = document.querySelectorAll(".icon");
let icons = Array.prototype.slice.call(document.querySelectorAll(".icon"));
// let wrapper_counter = document.querySelectorAll(".wrapper_counter");
for (let i = 0; i < icons.length; i++) {
    // console.log(icons[i]);
    icons[i].addEventListener("click", () => {
        // let value = icons.indexOf(event.currentTarget);
        // let counter = document.querySelectorAll(".wrapper_counter")[value].innerHTML;
        // console.log(counter);
        // console.log(value);
        const targetIndex = icons.indexOf(event.currentTarget); // звертається до конкретної іконки та повертає індекс 
        const counter = document.querySelectorAll(".wrapper_counter")[targetIndex].innerHTML;
        const counterValue = +counter + 1;
        document.querySelectorAll(".wrapper_counter")[targetIndex].innerHTML = counterValue;
        // const targetIndex = icons.indexOf(event.currentTarget);
        // console.log("iuds");
        // console.log(wrapper.length);
        // for(let j = 0; j<=wrapper.length; j++){
        //     let counter = document.createElement('div');
        //     // counter
        //     counter.innerHTML = `<p >3 </p>`;
        //     // counter.innerHTML = `<p > ${value} </p>`;
        //     counter.setAttribute("class", "wrapper_counter");
        //     wrapper[j].appendChild(counter);
        // let value = counter.innerText;
        // console.log(value);
        //     // boxes[0].appendChild(child);
        // }
        // let value = counter.innerText;
        // value+=1;
        // console.log(value);
    });
}


