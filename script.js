// Switch between pages
const home = document.getElementById("home");
const entryPage = document.getElementById("entry-page");
const savedDatesPage = document.getElementById("saved-dates-page");

const beginButton = document.getElementById("begin-button");
const viewDatesButton = document.getElementById("view-dates-button");
const backButton = document.getElementById("back-button");
const backToHome = document.getElementById("back-to-home");

// Navigation
beginButton.addEventListener("click", () => {
    home.classList.add("hidden");
    entryPage.classList.remove("hidden");
});

viewDatesButton.addEventListener("click", () => {
    home.classList.add("hidden");
    loadSavedDates();
    savedDatesPage.classList.remove("hidden");
});

backButton.addEventListener("click", () => {
    entryPage.classList.add("hidden");
    home.classList.remove("hidden");
});

backToHome.addEventListener("click", () => {
    savedDatesPage.classList.add("hidden");
    home.classList.remove("hidden");
});

// Save entry
const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", () => {
    const goodThings = document.getElementById("good-things").value;
    const appreciations = document.getElementById("appreciations").value;
    const improvement = document.getElementById("improvement").value;

    const today = new Date().toISOString().split('T')[0];

    const entry = {
        date: today,
        goodThings: goodThings,
        appreciations: appreciations,
        improvement: improvement,
    };

    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries = entries.filter(e => e.date !== today); // Avoid duplicates for the same
