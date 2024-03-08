const scrollTopButton = document.getElementById("scroll-top-button");
const progressCircle = document.getElementById("progress-circle");

const svgLength = 2 * Math.PI * 40; // Calculate circle length

window.addEventListener("scroll", function () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;

    progressCircle.style.strokeDashoffset = svgLength - (progress / 100) * svgLength;

    if (scrollTop > 100) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
});

function calcscrollValue() {
    let scrollprogress = document.getElementById("progress");
    let progressvalue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollprogress.style.display = "grid";
    } else {
        scrollprogress.style.display = "none";
    }
    scrollprogress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollprogress.style.background = `conic-gradient(#dc143c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcscrollValue;
window.onload = calcscrollValue;

main();
