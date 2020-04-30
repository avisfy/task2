let popup = document.getElementById("popup");
let closeSpan = document.getElementById("close");

function showAdd() {
    popup.className = "popup-show";
}

window.onclick = function (event) {
    if (event.target == popup) {
        closePopup();
    }
}
closeSpan.onclick = function () {
    closePopup();
}

function closePopup() {
    popup.className = "popup-hide";
}
