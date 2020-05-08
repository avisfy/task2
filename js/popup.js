"use strict"
import * as operations from "./common.js";

const btn = operations.btnAdd;


export function onAdd() {
    const popup = document.getElementById("popup-w");
    checkEmpty();
    checkNumberEmpty();

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
    const btnSend = document.getElementById("n-btn-send");
    const newsHead = document.getElementById("n-head").value;
    const newsText = document.getElementById("n-text").value;
    const ref = document.getElementById("n-ref").value;
    const author = document.getElementById("n-author").value;

    if (newsHead && newsText && ref && author) {
        btnSend.removeAttribute("disabled");
    } else {
        btnSend.setAttribute("disabled", "");
    }
}

export function checkNumberEmpty() {
    const btnLoad = document.getElementById("n-btn-load");
    const number = document.getElementById("n-number").value;

    if (number) {
        btnLoad.removeAttribute("disabled");
    } else {
        btnLoad.setAttribute("disabled", "");
    }
}