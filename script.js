document.addEventListener("DOMContentLoaded", async () => {

    const IMAGE_PATH = "images/";

    // Fetch file list from GitHub Pages directory
    async function getImages() {
        const response = await fetch(IMAGE_PATH);
        const text = await response.text();

        // Extract file names from HTML listing
        return [...text.matchAll(/href="([^"]+\.(jpg|jpeg|png|webp))"/g)]
            .map(m => m[1]);
    }

    const images = await getImages();

    // HERO (Pick hero-*.jpg)
    const heroImg = images.find(img => img.startsWith("hero-"));
    if (heroImg) {
        document.getElementById("hero").style.backgroundImage =
            `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.55)), url('${IMAGE_PATH}${heroImg}')`;
    }

    // BEFORE/AFTER
    const beforeAfterContainer = document.getElementById("beforeAfterContainer");

    const beforeImages = images.filter(img => img.startsWith("before-"));
    beforeImages.forEach(before => {
        const id = before.split("-")[1].split(".")[0];
        const after = images.find(img => img === `after-${id}.jpg`);

        if (after) {
            beforeAfterContainer.innerHTML += `
                <div class="ba-item">
                    <div class="ba-wrapper">
                        <img src="${IMAGE_PATH}${before}" class="ba-before">
                        <div class="ba-after-wrapper">
                            <img src="${IMAGE_PATH}${after}" class="ba-after">
                        </div>
                        <input type="range" min="0" max="100" value="50" class="slider">
                    </div>
                </div>
            `;
        }
    });

    // SLIDER FUNCTIONALITY
    document.querySelectorAll(".slider").forEach(slider => {
        slider.addEventListener("input", e => {
            const val = e.target.value;
            e.target.previousElementSibling.style.width = `${val}%`;
        });
    });

    // GALLERY: gallery-*.jpg
    const galleryContainer = document.getElementById("galleryContainer");
    const galleryImages = images.filter(img => img.startsWith("gallery-"));

    galleryImages.forEach(img => {
        galleryContainer.innerHTML += `
            <img src="${IMAGE_PATH}${img}" class="gallery-item">
        `;
    });

});
