document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file
    fetch("data/reviews.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load JSON file");
            }
            return response.json();
        })
        .then((reviews) => {
            const reviewCarousel = document.getElementById("review-carousel");
            reviewCarousel.innerHTML = ""; // Clear existing content

            // Populate reviews
            reviews.forEach((review) => {
                const reviewCard = `
                    <div class="review-card">
                        <h3>${review.name}</h3>
                        <p><strong>${review.title}</strong></p>
                        <p>${review.review}</p>
                        <div class="rating">
                            ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
                        </div>
                    </div>
                `;
                reviewCarousel.innerHTML += reviewCard;
            });

            // Initialize carousel
            initializeCarousel();
        })
        .catch((error) => {
            console.error("Error loading reviews:", error);
        });
});

function initializeCarousel() {
    const carousel = document.querySelector("#review-carousel");
    const cards = carousel.querySelectorAll(".review-card");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    let currentIndex = 0;

    function updateCarousel() {
        // Hide all cards
        cards.forEach((card, index) => {
            card.style.display = index === currentIndex ? "block" : "none";
        });
    }

    // Show the first card initially
    updateCarousel();

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Circular navigation
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length; // Circular navigation
        updateCarousel();
    });
}
