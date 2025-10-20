const envelope = document.querySelector('.envelope');
envelope.addEventListener('click', () => {
    document.querySelector('.envelope-wrapper').classList.toggle('flap');
});