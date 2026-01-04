document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const successMessage = document.getElementById('successMessage');
    const background = document.getElementById('background');

    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.innerHTML = '❤️';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.background = 'transparent';
        background.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 300);

    // Open envelope
    envelopeWrapper.addEventListener('click', (e) => {
        if (!envelopeWrapper.classList.contains('open')) {
            envelopeWrapper.classList.add('open');
        }
    });

    // Make "No" button run away
    btnNo.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
        
        btnNo.style.position = 'fixed';
        btnNo.style.left = x + 'px';
        btnNo.style.top = y + 'px';
    });

    // Success action
    btnYes.addEventListener('click', (e) => {
        e.stopPropagation();
        successMessage.classList.remove('hidden');
        successMessage.style.opacity = '1';
        
        // Celebration hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 50);
        }
    });
});
