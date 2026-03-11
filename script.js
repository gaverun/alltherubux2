document.addEventListener('DOMContentLoaded', () => {
    const cb = document.querySelector('label.switch input[type="checkbox"]');
    if (cb) cb.checked = false;
});
const vw = window.innerWidth;
const sound = new Audio("IMG_0102.mp3");
addEventListener("keydown", (event) => {
    if (event.key === "a") {
        sound.play();
    }   
});

function themeswitch() {
    const img = document.getElementById("image");
    const body = document.body;
    if (body.classList.contains("dark")) {
        img.src = "c2fc0404eeb8d393407bdaebe2cc9994a8953550.png";
        body.classList.remove("dark");
    } else {
        img.src = "Robux_2025_white.webp";
        body.classList.add("dark");
    }
}