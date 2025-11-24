document.addEventListener("DOMContentLoaded", () => {

    // Fade In on scroll
    const fades = document.querySelectorAll(".fade");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("visible");
        });
    }, { threshold: 0.2 });

    fades.forEach(sec => observer.observe(sec));

    // Scroll Top
    const btn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        btn.style.display = window.scrollY > 350 ? "block" : "none";
    });

    btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

});
