"use strict"

import {sendLoad} from "./addNews.js";

export function postAll() {
    const numberInput = document.getElementById("n-number");
    const numberNews = Number(numberInput.value);
    const address = `https://jsonplaceholder.typicode.com/posts?_limit=${numberNews}`;
    fetch(address).then(response => response.json())
            .then(post => {
                console.log(post);
                for(let currentPost of post) {
                    const newsHead = currentPost["title"];
                    const newsText = currentPost["body"];
                    const ref = "images/loaded.jpg";
                    const author = currentPost["userId"];
                    const date = new Date();
                    const postObj =  {
                        newsHead,
                        newsText,
                        ref,
                        author,
                        date
                    };
                    sendLoad(postObj);
                    numberInput.value ="";
                }

            });
}