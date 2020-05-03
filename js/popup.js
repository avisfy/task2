let popup = document.getElementById("popup");
let closeSpan = document.getElementById("close");

function popupAction() {
    if (popup.className === "popup-show") {
        popup.className = "popup-hide";
        document.getElementById("n-btn-add").value = "Add news!";
    } else {
        popup.className = "popup-show";
        document.getElementById("n-btn-add").value = "Close";
    }
}



function closePopup() {
    popup.className = "popup-hide";
}
