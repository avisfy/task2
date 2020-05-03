let popup1 = document.getElementById("popup-w");
let newsHead = document.getElementById("n-head");
let newsText = document.getElementById("n-text");
let ref = document.getElementById("n-ref");
function send() {
    createArticle();
    popup1.classList.add("popup-hide");
    document.getElementById("n-btn-add").value = "Add news!";
}

function createArticle() {
    document.getElementsByClassName("articles-back")[0].innerHTML += "<article>\n" +
        "        <img src=\"https://i.ytimg.com/vi/zgizhxBYCig/maxresdefault.jpg\" class=\"image\">\n" +
        "        <div class=\"overlay\">\n" +
        "            <div class=\"overlay-content\">\n" +
        "                <h5> First post </h5>\n" +
        "                <div class=\"text\">\n" +
        "                    <div>Seasons, they will change\n" +
        "                        Life will make you grow\n" +
        "                        Dreams will make you cry, cry, cry\n" +
        "                        Everything is temporary\n" +
        "                        Everything will slide\n" +
        "                    </div>\n" +
        "                    <div class=\"footer-auth\">avisfy</div>\n" +
        "                    <div class=\"footer-date\"> 6.7.2019</div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </article>";
}