const vw = window.innerWidth;
let openState = false;
function explanation() {
    const arrow = document.getElementById("explanation2");
    const explanationText = document.getElementById("explanation3");
    if (!arrow || !explanationText) {
        console.warn('explanation() called but elements not found: check IDs');
        return;
    }
    if (openState) {
        if (vw <= 1080) {
            arrow.style.transform = "translateX(-700%)";
            arrow.innerHTML = ">";
            explanationText.style.display = "none";
        } else {
            arrow.style.transform = "translateX(-950%)";
            arrow.innerHTML = ">";
            explanationText.style.display = "none";
        }  
    } else {
        if (vw >= 1080) {
            arrow.innerHTML = "v";
            arrow.style.transform = "translateX(-700%)";
            explanationText.style.display = "block";
        } else {
            arrow.innerHTML = "v";
            arrow.style.transform = "translateX(-820%)";
            explanationText.style.display = "block";
        }
    }
    openState = !openState;
}
const sound = new Audio("IMG_0102.mp3");
addEventListener("keydown", (event) => {
    if (event.key === "a") {
        sound.play();
    }   
});
