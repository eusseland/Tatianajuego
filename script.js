const pieces = [
    "T",
    "E",
    "A",
    "M",
    "O",
    "MUCHO"
];

function revealPiece(index) {
    const piece = document.getElementsByClassName("piece")[index];
    piece.textContent = pieces[index];
    piece.style.backgroundColor = "#4caf50";
    
    // Check if all pieces are revealed
    if (Array.from(document.getElementsByClassName("piece")).every(piece => piece.textContent !== "?")) {
        document.getElementById("message").textContent = "¡Te amo mucho!";
        document.getElementById("message").classList.remove("hidden");
    }
}