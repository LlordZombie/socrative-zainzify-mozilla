document.addEventListener("focus", function () {
    document.getElementsByClassName("waiting-for-activity-text")[0].innerText = "Jetzt moch ma des Quizzerl, gö";
    document.getElementsByClassName("hex-loading-container")[0].innerHTML = "<img src=\"icons/hz-48.png\">";
});
