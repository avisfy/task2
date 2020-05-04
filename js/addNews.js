"use strict"
debugger

let popup1 = document.getElementById("popup-w");

function onSend() {
    let newPost = getPostObject();
    let newArticle = createNewPost(newPost);
    let lastArticle = document.querySelector(".articles-back > article:last-child");
    lastArticle.after(newArticle);
    console.log(document.body.innerHTML);
    console.log("CREATED");
    console.log(newArticle.innerHTML);
    popup1.classList.add("popup-hide");
    document.getElementById("n-btn-add").value = "Add news!";
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
    let headBlock = document.createElement("h5");
    headBlock.textContent = postData.newsHead;

    let textBlock = document.createElement("div");
    textBlock.className = "text";
    textBlock.innerHTML = `<div>${postData.newsText}</div>`;
    let author = document.createElement("span");
    author.textContent = postData.author;
    author.className = "footer-auth";
    let date = document.createElement("span");
    date.textContent = `${postData.date.getDate()}/${postData.date.getMonth()}/${postData.date.getFullYear()}`;
    date.className = "footer-date";
    textBlock.appendChild(author);
    textBlock.appendChild(date);

    let overlayContent = document.createElement("div");
    overlayContent.className = "overlay-content";
    overlayContent.appendChild(headBlock);
    overlayContent.appendChild(textBlock);

    let overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.appendChild(overlayContent);

    let imageBlock = document.createElement("img");
    imageBlock.className = "image";
    imageBlock.setAttribute("src", postData.ref);

    let articleBlock = document.createElement("ARTICLE");
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