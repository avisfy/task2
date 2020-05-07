import {send} from "./addNews.js";
import {onAdd, checkEmpty, checkNumberEmpty} from "./popup.js";
import {postAll} from "./loadNews.js";

window.onSend = function () {
    send();
}

window.onAddNews = function () {
    onAdd();
}

window.onInputFull = function () {
    checkEmpty();
}

window.onLoadInputFull = function () {
    checkNumberEmpty();
}

window.onLoadNews = function () {
    postAll();
}