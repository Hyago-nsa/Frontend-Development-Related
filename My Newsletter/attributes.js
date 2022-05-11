var img = document.getElementById('image-hover');

img.addEventListener('mouseenter', function() {
    this.src = 'images\popcat-2.png';
}, false);

img.addEventListener('mouseleave', function() {
    this.src = 'images\popcat-1.png';
}, false);