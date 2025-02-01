document.addEventListener('DOMContentLoaded', function() {
    const certificateCards = document.querySelectorAll('.certificate-card');

    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
    });
});