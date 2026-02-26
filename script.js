// Keep a boolean state but avoid shadowing window.open
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
        explanationText.style.display = "none";
    } else {
        arrow.innerHTML = "v";
        explanationText.style.display = "block";
    }

    openState = !openState;
}