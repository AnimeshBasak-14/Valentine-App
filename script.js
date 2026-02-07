// Page Navigation Logic
// Background Music Logic
const music = document.getElementById('bg-music');
let isPlaying = false;

function playMusic() {
    if (!isPlaying && music) {
        music.play().then(() => {
            isPlaying = true;
            console.log("Music playing");
        }).catch(err => {
            console.log("Autoplay blocked, waiting for interaction");
        });
    }
}

// Try to play on load
document.addEventListener('DOMContentLoaded', playMusic);

// Fallback: Play on first click
document.body.addEventListener('click', () => {
    playMusic();
}, { once: true });

function nextPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Special interaction for the No button (Running away logic - Optional but fun)
const noBtn = document.querySelector('.no-btn');
if (noBtn) {
    noBtn.addEventListener('mouseover', () => {
        // You can uncomment this to make the button run away like before!
        // moveButton(noBtn);
    });
}

function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
