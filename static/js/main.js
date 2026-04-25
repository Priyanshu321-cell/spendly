// main.js — students will add JavaScript here as features are built

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.js-modal');
    var trigger = document.querySelector('.js-modal-trigger');
    var closeBtn = document.querySelector('.js-modal-close');
    var iframe = document.getElementById('modal-iframe');

    if (!modal || !trigger || !closeBtn || !iframe) return;

    var videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('active');
        iframe.src = videoUrl + '?autoplay=1';
    });

    function closeModal() {
        modal.classList.remove('active');
        iframe.src = '';
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});