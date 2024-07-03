document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const fullScreenDiv = document.createElement('div');
    fullScreenDiv.className = 'full-screen';
    fullScreenDiv.innerHTML = '<img id="fullScreenImg" src="" alt="Full Screen Image">';
    document.body.appendChild(fullScreenDiv);

    const fullScreenImg = document.getElementById('fullScreenImg');
    let timer = 0;
    let prevent = false;
    const delay = 200; // milliseconds

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            timer = setTimeout(() => {
                if (!prevent) {
                    fullScreenImg.src = e.target.src;
                    fullScreenDiv.style.display = 'flex';
                }
                prevent = false;
            }, delay);
        });

        item.addEventListener('dblclick', () => {
            clearTimeout(timer);
            prevent = true;
            fullScreenDiv.style.display = 'none';
        });
    });

    fullScreenDiv.addEventListener('click', () => {
        fullScreenDiv.style.display = 'none';
    });

    fullScreenDiv.addEventListener('dblclick', () => {
        fullScreenDiv.style.display = 'none';
    });
});
