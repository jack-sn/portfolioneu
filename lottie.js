 // Your JavaScript code here
 const animData = 'media/json/starteAnimation.json'; // Replace with the path to your JSON file
 const anim = lottie.loadAnimation({
   container: document.getElementById('lottie-container'), // The container for the animation
   renderer: 'svg', // The renderer to use
   loop: true, // Whether to loop the animation
   autoplay: true, // Whether to autoplay the animation
   animationData: animData, // The animation data
 });

 // Animate the animation on scroll
 window.addEventListener('scroll', () => {
   const scrollPosition = window.scrollY;
   const containerHeight = document.getElementById('lottie-container').offsetHeight;
   const animationDuration = anim.getDuration(true); // Get the animation duration
   const progress = scrollPosition / (containerHeight + animationDuration); // Calculate the progress
   anim.goToAndStop(progress * animationDuration, true); // Go to the frame at the calculated progress
 });