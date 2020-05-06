import {send} from "./addNews.js";
import {onAdd, checkEmpty} from "./popup.js";

window.onSend = function () {
    send();
}

window.onAddNews = function () {
    onAdd();
}

window.onInputFull = function () {
    checkEmpty();
}