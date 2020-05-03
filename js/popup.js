"use strict"
debugger
let popup = document.getElementById("popup-w");

function popupAction() {

    if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.add("popup-hide");
        document.getElementById("n-btn-add").value = "Add news!";
    } else if (popup.classList.contains("popup-hide")) {
        popup.classList.remove("popup-hide");
        popup.classList.add("popup-show");
        document.getElementById("n-btn-add").value = "Close";
    } else {
        popup.classList.add("popup-show");
        document.getElementById("n-btn-add").value = "Close";
    }
}

