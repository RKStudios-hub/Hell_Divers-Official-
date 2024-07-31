document.getElementById('link').addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.href, '_blank');

    const countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block';

    let timeLeft = 5;
    countdownElement.innerText = `${timeLeft} seconds remaining`;

    const timer = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            countdownElement.innerText = `${timeLeft} seconds remaining`;
        } else {
            clearInterval(timer);
            countdownElement.style.display = 'none';
            document.getElementById('downloadButton').style.display = 'inline-block';
            document.getElementById('downloadButton').classList.add('loading');
        }
    }, 1000);
});

window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const scrollPosition = window.pageYOffset;
    
    video.style.transform = `translate3d(-50%, calc(-50% + ${scrollPosition * 0.5}px), 0)`;
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            console.log('Autoplay was prevented. Trying to play again after user interaction.');
            // Wait for user interaction
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    }
});
