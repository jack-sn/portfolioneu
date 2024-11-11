// script.js
document.querySelectorAll('.open-lightbox').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const description = this.getAttribute('data-text');
        const imgSrc = this.getAttribute('data-img');

        // Set the lightbox content
        document.getElementById('lightbox-title').innerText = description;
        document.getElementById('lightbox-img').src = imgSrc;
        document.getElementById('lightbox-description').innerText = description;

        // Show the lightbox
        document.getElementById('lightbox').style.display = 'block';
    });
});

document.getElementById('close-lightbox').onclick = function() {
    document.getElementById('lightbox').style.display = 'none';
};

// Optional: Close lightbox when clicking outside of content
window.onclick = function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target == lightbox) {
        lightbox.style.display = 'none';
    }
};
