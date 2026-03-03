let openState = false;
function explanation() {
    const arrow = document.getElementById("explanation2");
    const explanationText = document.getElementById("explanation3");
    if (!arrow || !explanationText) {
        console.warn('explanation() called but elements not found: check IDs');
        return;
    }
    if (openState) {
        arrow.innerHTML = ">";
        arrow.style.transform = "translateX(-800%)";
        explanationText.style.display = "none";
    } else {
        arrow.innerHTML = "v";
        arrow.style.transform = "translateX(-950%)";
        explanationText.style.display = "block";
    }
    openState = !openState;
}
const sound = new Audio("IMG_0102.mp3");
addEventListener("keydown", (event) => {
    if (event.key === "a") {
        sound.play();
    }   
});