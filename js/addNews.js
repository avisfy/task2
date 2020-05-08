"use strict"
import {createBlock} from "./blocks.js";
import {createImageBlock} from "./blocks.js";
import {hide} from "./common.js";


export function send(postObj) {
    const popup = document.getElementById("popup-w");
    let newArticle;
    if (postObj) {
        newArticle = createNewPost(postObj);
    } else {
        const newPost = getPostObject();
        newArticle = createNewPost(newPost);
    }
    const lastArticle = document.querySelector(".articles-back > article:last-child");
    lastArticle.after(newArticle);
    hide(popup);
    clearInputs();
}


function getPostObject() {
    let newsHead = document.getElementById("n-head").value;
    let newsText = document.getElementById("n-text").value;
    let ref = document.getElementById("n-ref").value;
    let author = document.getElementById("n-author").value;
    let date = new Date();
    return {
        newsHead,
        newsText,
        ref,
        author,
        date
    };
}


function createNewPost(postData) {
    const datestring = `${postData.date.getDate()}/${postData.date.getMonth()}/${postData.date.getFullYear()}`;

    const headBlock = createBlock("h5", postData.newsHead);
    const textBlock = createBlock("div", "", "text");
    textBlock.innerHTML = `<div>${postData.newsText}</div>`;

    const author = createBlock("span", postData.author, "footer-auth");
    const date = createBlock("span", datestring, "footer-date");
    textBlock.appendChild(author);
    textBlock.appendChild(date);

    const overlayContent = createBlock("div", "", "overlay-content");
    overlayContent.appendChild(headBlock);
    overlayContent.appendChild(textBlock);

    const overlay = createBlock("div", "", "overlay");
    overlay.appendChild(overlayContent);

    const imageBlock = createImageBlock("image", postData.ref);

    const articleBlock = createBlock("article", "");
    articleBlock.appendChild(imageBlock);
    articleBlock.appendChild(overlay);
    return articleBlock;
}


function clearInputs() {
    document.getElementById("n-head").value = "";
    document.getElementById("n-text").value = "";
    document.getElementById("n-ref").value = "";
    document.getElementById("n-author").value = "";
}
