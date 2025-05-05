document.addEventListener('DOMContentLoaded', () => {
    const mapName = document.body.dataset.map;  
    const totalImages = 3;
    let currentImage = 1;

    const img = document.getElementById(`${mapName}-image`);
    const counter = document.getElementById(`${mapName}-counter`);

    const updateImage = () => {
        img.classList.remove('fade-in');
        void img.offsetWidth; 
        img.src = `../../assets/maps/${mapName}/${mapName}${currentImage}.avif`; 
        img.classList.add('fade-in');
        counter.textContent = `${currentImage}/${totalImages}`;
    };

    const switchImage = (direction) => {
        currentImage += direction;
        if (currentImage < 1) currentImage = totalImages;
        if (currentImage > totalImages) currentImage = 1;
        updateImage();
    };

    document.getElementById('prev-btn').addEventListener('click', () => switchImage(-1));
    document.getElementById('next-btn').addEventListener('click', () => switchImage(1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') switchImage(-1);
        if (e.key === 'ArrowRight') switchImage(1);
    });

    updateImage();
});
