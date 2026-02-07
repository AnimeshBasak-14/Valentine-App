// Page Navigation Logic
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
