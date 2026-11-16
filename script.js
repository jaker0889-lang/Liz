function startWebsite() {
    nextPage("wanted");
}

function nextPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

function answerYes() {
    document.getElementById("response").textContent =
        "YAY! See you on Wednesday! HAHAHAHA 💙";
}

function answerNo() {
    document.getElementById("response").textContent =
        "No worries! Maybe next time. HAHAHA 😭";
}