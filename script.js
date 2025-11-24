document.addEventListener("DOMContentLoaded", async () => {
    console.log("Website loading...");

    /** LOAD images.json **/
    let data;
    try {
        data = await fetch("images/images.json").then(r => r.json());
    } catch (err) {
        console.error("Cannot load images.json", err);
        return;
    }

    /** HERO SLIDER **/
    const heroBg = document.querySelector(".hero-bg");
    if (data.hero?.length) {
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

    /** BEFORE / AFTER **/
    const baContainer = document.getElementById("beforeafter-slider");

    if (data.beforeafter) {
        data.beforeafter.forEach(item => {
            const box = document.createElement("div");
            box.className = "ba-box";

            box.innerHTML = `
                <div class="ba-inner">
                    <div class="ba-side">
                        <h3>قبل</h3>
                        <img src="images/${item.before}">
                    </div>

                    <div class="ba-side">
                        <h3>بعد</h3>
                        <img src="images/${item.after}">
                    </div>
                </div>
            `;
            baContainer.appendChild(box);
        });
    }

    /** GALLERY **/
    const gallery = document.getElementById("gallery-grid");

    if (data.gallery) {
        data.gallery.forEach(img => {
            const div = document.createElement("div");
            div.className = "gallery-item";

            div.innerHTML = `<img src="images/${img}" loading="lazy">`;
            gallery.appendChild(div);
        });
    }

    /** SCROLL TO TOP **/
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        scrollBtn.style.opacity = window.scrollY > 300 ? 1 : 0;
    });
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});

/*** MOBILE MENU TOGGLE ***/
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("open");
});

// بستن منو با کلیک روی بیرون
document.addEventListener("click", (e) => {
    const menu = document.getElementById("navMenu");
    const toggle = document.getElementById("menuToggle");

    // اگر منو باز است و روی جایی غیر از منو و غیر از دکمه کلیک کردیم → منو ببند
    if (menu.classList.contains("open") && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("open");
    }
});

