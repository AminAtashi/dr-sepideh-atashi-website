document.addEventListener("DOMContentLoaded", () => {
    console.log("سایت دکتر سپیده آتشی بارگذاری شد.");

    // انیمیشن fade-in روی سکشن‌ها
    const fadeSections = document.querySelectorAll(".fade");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );
    fadeSections.forEach(sec => observer.observe(sec));

    // دکمه اسکرول به بالا
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 350 ? "block" : "none";
    });
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
