window.addEventListener('load', bindEvents); //we are not using defer in this case

var counter = 0;

function plus() {

    counter++;
    document.getElementsByTagName('span')[0].innerHTML = `<i>${counter}</i>`;
    console.log("I am plus function " + counter);
}

function bindEvents() {

    var likeButton = document.getElementById('like');
    likeButton.addEventListener('click', plus);
} 