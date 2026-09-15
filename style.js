
// =====================================
// MEMORY PAGE JAVASCRIPT
// =====================================


// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    const memoryButtons = document.querySelectorAll(".memory-btn");


    // Add a small click animation
    memoryButtons.forEach((button) => {

        button.addEventListener("click", function () {

            this.classList.add("clicked");

            // Remove the class after the animation
            setTimeout(() => {
                this.classList.remove("clicked");
            }, 300);

        });

    });


    // Add a gentle staggered entrance
    memoryButtons.forEach((button, index) => {

        button.style.opacity = "0";
        button.style.transform = "translateY(15px)";

        setTimeout(() => {

            button.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            button.style.opacity = "1";
            button.style.transform = "translateY(0)";

        }, 150 + (index * 100));

    });

});
