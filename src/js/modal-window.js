// Code for modal window
// When the user clicks on the purchase button, open the modal
console.log("enter to module");

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("purchaseNow");
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modal.style.display = "block";
    };
}

var link_btn1 = document.getElementsByClassName("modal__content-right-button");
for (var j = 0; j < link_btn1.length; j++) {
    link_btn1[j].onclick = function () {
        modal.style.display = "none";
    };
}

document.getElementsByClassName("modal__content-left-btn")[0].onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}