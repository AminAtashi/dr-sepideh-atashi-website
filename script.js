document.addEventListener("DOMContentLoaded", function () {
    console.log("وبسایت دکتر سپیده آتشی با موفقیت بارگذاری شد!");

    // Smooth Scroll Effect for Sections
    const fadeInSections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeInSections.forEach((section) => {
        observer.observe(section);
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
