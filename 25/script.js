let input = document.querySelector(".wrapper_input");
let button = document.querySelector(".wrapper_button");

function isURL(strInput) {
    try {
        new URL(strInput);
        return true;
    } catch {
        return false;
    }
}

button.addEventListener("click", function (event) {
    if (isURL(input.value)) {
        window.location.assign(input.value);
    } else {
        window.location.assign("https://" + input.value);
    }
    // if (new URL(input.value).protocol = "https:") {
    //     window.location.assign(input.value);
    // } else {
    //     window.location.assign("https://" + input.value);
    // }
});
