// ============================================
// TRICKY BUTTON LOGIC
// ============================================
let clickCount = 0;
const maxClicks = 10;
const trickyButton = document.getElementById('tricky-button');
const clickCountSpan = document.getElementById('click-count');
const introScreen = document.getElementById('intro-screen');
const netflixIntro = document.getElementById('netflix-intro');
const mainContent = document.getElementById('main-content');

// Make button move around when mouse gets close
trickyButton.addEventListener('mouseover', function(e) {
    if (clickCount < maxClicks) {
        const maxX = window.innerWidth - this.offsetWidth - 100;
        const maxY = window.innerHeight - this.offsetHeight - 100;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        this.style.position = 'fixed';
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';
        this.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    }
});

// Handle button clicks
trickyButton.addEventListener('click', function(e) {
    e.stopPropagation();
    clickCount++;
    clickCountSpan.textContent = clickCount;
    
    // Add click effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
    
    if (clickCount >= maxClicks) {
        this.textContent = '✅ Berhasil! Tunggu sebentar...';
        this.style.cursor = 'default';
        
        // Start Netflix intro after 1 second
        setTimeout(() => {
            startNetflixIntro();
        }, 1000);
    } else {
        // Funny messages as they click
        const messages = [
            'Waduh ketinggalan! Coba lagi 😁',
            'Hampir kena! Semangat! 💪',
            'Hahaha kecepetan! 😂',
            'Ayo dong, fokus! 🎯',
            'Sedikit lagi nih! Keep trying! 🔥',
            'Jangan nyerah! You can do it! ⭐',
            'Wow, makin jago nih! 🚀',
            'Tinggal dikit lagi! 🎊',
            'Hampir sampai! Last spurt! 🏃‍♀️'
        ];
        
        if (clickCount < messages.length) {
            const hint = document.querySelector('.hint');
            hint.textContent = messages[clickCount - 1];
            hint.style.color = '#E50914';
        }
    }
});

// ============================================
// NETFLIX INTRO
// ============================================
function startNetflixIntro() {
    introScreen.classList.remove('active');
    netflixIntro.classList.add('active');
    
    // Play Netflix sound (optional, using placeholder)
    const netflixSound = document.getElementById('netflix-sound');
    netflixSound.volume = 0.3;
    netflixSound.play().catch(e => console.log('Audio autoplay blocked'));
    
    // After 3 seconds, show main content
    setTimeout(() => {
        netflixIntro.classList.remove('active');
        mainContent.classList.add('active');
        
        // Start background music
        const bgMusic = document.getElementById('bg-music');
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => console.log('Audio autoplay blocked'));
        
        // Start confetti on last card
        setTimeout(() => {
            initConfetti();
        }, 1000);
    }, 3500);
}

// ============================================
// MUSIC CONTROL
// ============================================
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isMusicPlaying = true;

musicToggle.addEventListener('click', function() {
    if (isMusicPlaying) {
        bgMusic.pause();
        this.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        this.textContent = '🔊';
        isMusicPlaying = true;
    }
});

// ============================================
// BOOK CARD NAVIGATION
// ============================================
let currentCard = 1;
const totalCards = 6;
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentPageSpan = document.getElementById('current-page');

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev');
        
        if (index + 1 === currentCard) {
            card.classList.add('active');
        } else if (index + 1 < currentCard) {
            card.classList.add('prev');
        }
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentCard === 1;
    nextBtn.disabled = currentCard === totalCards;
    
    // Update page indicator
    currentPageSpan.textContent = currentCard;
    
    // Trigger confetti on last card
    if (currentCard === totalCards) {
        setTimeout(() => {
            launchConfetti();
        }, 500);
    }
}

prevBtn.addEventListener('click', function() {
    if (currentCard > 1) {
        currentCard--;
        updateCards();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentCard < totalCards) {
        currentCard++;
        updateCards();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (mainContent.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && currentCard > 1) {
            currentCard--;
            updateCards();
        } else if (e.key === 'ArrowRight' && currentCard < totalCards) {
            currentCard++;
            updateCards();
        }
    }
});

// ============================================
// CONFETTI ANIMATION
// ============================================
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [];
let animationId;

function initConfetti() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createConfetti() {
    const colors = ['#E50914', '#ffffff', '#FFD700', '#FF69B4', '#00ff00'];
    
    for (let i = 0; i < 150; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 5,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 5 - 2.5
        });
    }
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confettiParticles.forEach((p, index) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
        
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;
        
        // Remove particles that fall off screen
        if (p.y > canvas.height) {
            confettiParticles.splice(index, 1);
        }
    });
    
    if (confettiParticles.length > 0) {
        animationId = requestAnimationFrame(updateConfetti);
    }
}

function launchConfetti() {
    createConfetti();
    updateConfetti();
}

// Window resize handler for canvas
window.addEventListener('resize', function() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateCards();
});
