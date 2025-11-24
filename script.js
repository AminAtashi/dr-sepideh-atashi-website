document.addEventListener("DOMContentLoaded", async () => {
    console.log("Loading dynamic beauty website…");

    const data = await fetch("images/images.json").then(res => res.json());

    /* ---------------------------------------------------------
        HERO SLIDER
    --------------------------------------------------------- */
    const heroEl = document.querySelector(".hero-bg");

    if (data.hero && data.hero.length > 0) {
        let i = 0;
        heroEl.style.backgroundImage = `url('images/${data.hero[0]}')`;

        setInterval(() => {
            i = (i + 1) % data.hero.length;
            heroEl.style.backgroundImage = `url('images/${data.hero[i]}')`;
        }, 5000);
    }

    /* ---------------------------------------------------------
        BEFORE/AFTER SLIDER
    --------------------------------------------------------- */
    const baContainer = document.getElementById("beforeafter-slider");

    if (baContainer && data.beforeafter) {
        data.beforeafter.forEach((item, idx) => {
            const block = document.createElement("div");
            block.className = "ba-box";

            block.innerHTML = `
                <div class="ba-wrapper">
                    <img class="ba-before" src="images/${item.before}">
                    <div class="ba-divider"></div>
                    <img class="ba-after" src="images/${item.after}">
                </div>
            `;

            baContainer.appendChild(block);
        });
    }

    /* ---------------------------------------------------------
        GALLERY
    --------------------------------------------------------- */
    const galleryEl = document.getElementById("gallery-grid");

    if (galleryEl && data.gallery) {
        data.gallery.forEach(img => {
            const el = document.createElement("div");
            el.className = "gallery-item";
            el.innerHTML = `<img src="images/${img}" loading="lazy">`;
            galleryEl.appendChild(el);
        });
    }

    /* ---------------------------------------------------------
        SCROLL TO TOP BUTTON
    --------------------------------------------------------- */
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function () {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
