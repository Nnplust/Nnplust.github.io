// Wait for the DOM to fully load
window.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".animate-text");

    // Add a delay to the animation for better visual effect
    setTimeout(() => {
        heroText.style.animationDelay = "0s";
    }, 500);
});
