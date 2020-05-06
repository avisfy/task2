export function createBlock(tag, text, classname) {
    const block = document.createElement(tag);
    if (classname !== undefined) {
        block.className = classname;
    }
    if (text !== "") {
        block.textContent = text;
    }
    return block;
}

export function createImageBlock(classname, ref) {
    const imageBlock = document.createElement("img");
    imageBlock.className = classname;
    imageBlock.src = ref;
    imageBlock.onerror = () => imageBlock.src = "images/errorimg.jpg";
    return imageBlock;
}