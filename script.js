// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Move NO button (desktop + mobile)
function moveNoButton() {
    const container = document.querySelector(".letter-window");
    const rect = container.getBoundingClientRect();

    const maxX = rect.width / 2 - 90;
    const maxY = rect.height / 2 - 90;

    const moveX = (Math.random() * 2 - 1) * maxX;
    const moveY = (Math.random() * 2 - 1) * maxY;

    noBtn.style.transition = "transform 0.25s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);   // laptop
noBtn.addEventListener("touchstart", moveNoButton); // phone

// YES button clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! 💖";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
});
