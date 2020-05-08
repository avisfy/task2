"use strict"

import {send} from "./addNews.js";

export function postAll() {
    const numberInput = document.getElementById("n-number");
    const loadPopup = document.getElementById("loading");
    loadPopup.classList.remove("popup-loading-hide");
    loadPopup.classList.add("popup-loading-show");
    const numberNews = Number(numberInput.value);
    const address = `https://jsonplaceholder.typicode.com/posts?_limit=${numberNews}`;
    fetch(address)
        .then(response => response.json())
        .then(posts => {
            posts.map(post => {
                    const newsHead = post.title;
                    const newsText = post.body;
                    const ref = "images/loaded.jpg";
                    const author = post.userId;
                    const date = new Date();
                    const postObj = {
                        newsHead,
                        newsText,
                        ref,
                        author,
                        date
                    };
                    send(postObj);
                }
            )
            loadPopup.classList.remove("popup-loading-show");
            loadPopup.classList.add("popup-loading-hide");
            numberInput.value = "";
        });
}