document.addEventListener("focus ", main);
document.addEventListener("load", main);
document.addEventListener("DOMContentLoaded", main);
function main() {
    document.getElementsByClassName("waiting-for-activity-text")[0].innerText = "Jetzt moch ma des Quizzerl, gö";
    document.getElementsByClassName("hex-loading-container")[0].innerHTML = "<img id='spinnyboy' src=\"https://raw.githubusercontent.com/LlordZombie/socrative-zainzify-mozilla/master/web-ext-artifacts/hz-48%20-%20Copy%20(Custom).png\">";
}