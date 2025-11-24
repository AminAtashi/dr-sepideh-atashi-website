document.addEventListener("DOMContentLoaded", async () => {
    console.log("Loading dynamic website...");

    /* -----------------------------------------------------------
       LOAD images.json
    ----------------------------------------------------------- */
    let data;
    try {
        data = await fetch("images/images.json").then(res => res.json());
    } catch (e) {
        console.error("Error loading images.json", e);
        return;
    }

    /* -----------------------------------------------------------
       HERO SLIDER
    ----------------------------------------------------------- */
    const heroBg = document.querySelector(".hero-bg");

    if (data.hero && data.hero.length > 0) {
        let index = 0;
        heroBg.style.backgroundImage = `url("images/${data.hero[0]}")`;

        setInterval(() => {
            index = (index + 1) % data.hero.length;
            heroBg.style.opacity = 0;
            setTimeout(() => {
                heroBg.style.backgroundImage = `url("images/${data.hero[index]}")`;
                heroBg.style.opacity = 1;
            }, 500);
        }, 5000);
    }

    

    /* -----------------------------------------------------------
       BEFORE/AFTER SECTION
    ----------------------------------------------------------- */
    const baContainer = document.getElementById("beforeafter-slider");

    if (data.beforeafter && baContainer) {
        data.beforeafter.forEach(item => {
            const box = document.createElement("div");
            box.className = "ba-box";

            box.innerHTML = `
                <div class="ba-inner">
                    <div class="ba-side">
                        <h3>قبل</h3>
                        <img src="images/${item.before}" alt="Before">
                    </div>
                    <div class="ba-side">
                        <h3>بعد</h3>
                        <img src="images/${item.after}" alt="After">
                    </div>
                </div>
            `;

            baContainer.appendChild(box);
        });
    }

    /* -----------------------------------------------------------
       GALLERY SECTION
    ----------------------------------------------------------- */
    const gallery = document.getElementById("gallery-grid");

    if (data.gallery && gallery) {
        data.gallery.forEach(img => {
            const div = document.createElement("div");
            div.className = "gallery-item";
            div.innerHTML = `<img src="images/${img}" loading="lazy">`;
            gallery.appendChild(div);
        });
    }

    /* -----------------------------------------------------------
       SCROLL TO TOP
    ----------------------------------------------------------- */
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        scrollTopBtn.style.opacity = window.scrollY > 300 ? 1 : 0;
    });

    scrollTopBtn.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
    );
});
// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

