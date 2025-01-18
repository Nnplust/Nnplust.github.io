document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    // Number of visible items (adjust this based on CSS layout)
    const visibleItems = 3;
    const totalItems = carouselItems.length;

    // Calculate maximum index (total items minus visible items)
    const maxIndex = totalItems - visibleItems;

    // Move the carousel to the next position
    const moveCarousel = () => {
        const itemWidth = carousel.offsetWidth / visibleItems;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        carousel.style.transition = "transform 0.5s ease";
    };

    // Next button event
    nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveCarousel();
        }
    });

    // Previous button event
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveCarousel();
        }
    });
});
