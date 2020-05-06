export const btnAdd = document.getElementById("n-btn-add");

export function hide(popup) {
    popup.classList.remove("popup-show");
    popup.classList.add("popup-hide");
    btnAdd.value = "Add news!";
}

export function show(popup) {
    popup.classList.remove("popup-hide");
    popup.classList.add("popup-show");
    btnAdd.value = "Close";
}