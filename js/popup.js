"use strict"
import * as operations from "./common.js";

const btn = operations.btnAdd;


 export function onAdd() {
    const popup = document.getElementById("popup-w");
    checkEmpty();
    //if open and clicked "close"
    if (popup.classList.contains("popup-show")) {
        operations.hide(popup);
    } //if closed and "open" clicked
    else if (popup.classList.contains("popup-hide")) {
        operations.show(popup);
    } //if closed by default
    else {
        popup.classList.add("popup-show");
        btn.value = "Close";
    }
}

export function checkEmpty() {
    debugger;
    const btnSend = document.getElementById("n-btn-send");
    let newsHead = document.getElementById("n-head").value;
    let newsText = document.getElementById("n-text").value;
    let ref = document.getElementById("n-ref").value;
    let author = document.getElementById("n-author").value;
    if (newsHead && newsText && ref && author) {
        btnSend.removeAttribute("disabled");
    } else {
        btnSend.setAttribute("disabled", "");
    }
}
