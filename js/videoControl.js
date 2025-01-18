document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('mockupVideo');
    const playButton = document.getElementById('playButton');
    const playIcon = playButton.querySelector('i');

    // Play/Pause functionality
    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            playButton.style.display = 'none'; // Hide play button when playing
        } else {
            video.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            playButton.style.display = 'flex'; // Show play button when paused
        }
    });

    // Show play button when the video ends
    video.addEventListener('ended', () => {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        playButton.style.display = 'flex';
    });
});
