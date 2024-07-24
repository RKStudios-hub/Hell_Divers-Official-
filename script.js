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
let timeout;
document.addEventListener('mousemove', function(e) {
    if (timeout) {
        cancelAnimationFrame(timeout);
    }
    timeout = requestAnimationFrame(function() {
        const videoContainer = document.getElementById('videoContainer');
        const x = (e.clientX - window.innerWidth / 2) / 20;
        const y = (e.clientY - window.innerHeight / 2) / 20;
        videoContainer.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });
});
   // Select the custom cursor element
   const customCursor = document.getElementById('customCursor');

   // Variables to store the mouse coordinates
   let mouseX = 0;
   let mouseY = 0;

   // Variables to store the cursor's position
   let cursorX = 0;
   let cursorY = 0;

   // Speed of the cursor following the mouse
   const speed = .7; // Adjust the speed (0.1 for slow, 1 for instant)

   // Function to update the cursor position smoothly
   const animateCursor = () => {
       // Calculate the distance between the cursor and the mouse position
       const distX = mouseX - cursorX;
       const distY = mouseY - cursorY;

       // Update the cursor's position with a fraction of the distance
       cursorX += distX * speed;
       cursorY += distY * speed;

       // Apply the new cursor position
       customCursor.style.left = `${cursorX}px`;
       customCursor.style.top = `${cursorY}px`;

       // Request the next animation frame
       requestAnimationFrame(animateCursor);
   };

   // Start the cursor animation
   animateCursor();

   // Function to update mouse coordinates
   const updateMouseCoordinates = (event) => {
       mouseX = event.clientX;
       mouseY = event.clientY;
       customCursor.style.display = 'block'; // Show the cursor
   };

   // Function to hide cursor when the mouse leaves the window
   const hideCursor = () => {
       customCursor.style.display = 'none'; // Hide the cursor
   };

   // Event listeners for mouse movement and leaving the window
   document.addEventListener('mousemove', updateMouseCoordinates);
   document.addEventListener('mouseleave', hideCursor);
