document.addEventListener("focus", main);
document.addEventListener("load", main);
window.addEventListener("load", main);
document.addEventListener("DOMContentLoaded", main);
if (document.getElementsByClassName("waiting-for-activity-text")[0]) main();
let observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.addedNodes.length !== 0) {
            let hexLoadingContainer = document.querySelector('.hex-loading-container');
            if (hexLoadingContainer) {
                console.log("Hex loading container found");
                main();
                observer.disconnect();
                break;
            }
        }
    }
});
observer.observe(document.body, {childList: true, subtree: true});

function main() {
    document.getElementsByClassName("waiting-for-activity-text")[0].innerText = "Jetzt moch ma des Quizzerl, gö";
    document.getElementsByClassName("hex-loading-container")[0].innerHTML = "<img id='spinnyboy' src=\"https://raw.githubusercontent.com/LlordZombie/socrative-zainzify-mozilla/master/web-ext-artifacts/hz-48%20-%20Copy%20(Custom).png\">";
    let div = document.createElement('div');
    div.className = 'scroll-text';
    div.textContent = "find . -type f -name \"*.txt\" -exec grep -il \"keyword\" {} + | xargs -I {} sh -c 'echo \"{}\"; cat {} | sed \"s/old_text/new_text/g\" | awk \"{print NR, \\$0}\" | sort -nr | tee {}.modified' && find . -type f -name \"*.modified\" -exec gzip {} +\n";
    document.getElementsByClassName("waiting-for-activity-text")[0].appendChild(div);
}