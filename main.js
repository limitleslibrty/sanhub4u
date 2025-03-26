function searchMovies() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {
        let title = card.querySelector(".movie-title").textContent.toLowerCase();
        card.style.display = title.includes(input) ? "inline-block" : "none";
    });
}