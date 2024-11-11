document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close-btn');
    const overlay = document.getElementById('overlay');

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            overlay.style.display = 'none';
            document.body.style.overflow = ''; // Restore body scrolling
        });
    }

    document.querySelectorAll('.overlay-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const url = this.getAttribute('href'); // Get the URL from the link
            
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data; // Load the content
                    overlay.style.display = 'block'; // Show the overlay
                    document.body.style.overflow = 'hidden'; // Prevent body scrolling
                })
                .catch(error => console.error('Error loading content:', error));
        });
    });
});
