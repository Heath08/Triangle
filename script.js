console.log("JavaScript is connected!");

// Select all pages
const home = document.getElementById("home");
const entryPage = document.getElementById("entry-page");
const savedDatesPage = document.getElementById("saved-dates-page");

// Select buttons
const beginButton = document.getElementById("begin-button");
const viewDatesButton = document.getElementById("view-dates-button");
const backButton = document.getElementById("back-button");
const backToHome = document.getElementById("back-to-home");
const saveButton = document.getElementById("save-button");

// Navigation buttons
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

// Save entry button
saveButton.addEventListener("click", () => {
    const goodThings = document.getElementById("good-things").value.trim();
    const appreciations = document.getElementById("appreciations").value.trim();
    const improvement = document.getElementById("improvement").value.trim();

    if (!goodThings || !appreciations || !improvement) {
        alert("Please fill out all sections!");
        return;
    }

    const today = new Date().toISOString().split("T")[0];
    const entry = { date: today, goodThings, appreciations, improvement };

    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries = entries.filter(e => e.date !== today); // Prevent duplicate dates
    entries.push(entry);

    localStorage.setItem("entries", JSON.stringify(entries));
    alert("Entry saved!");
    document.getElementById("entry-form").reset();
});

// Load saved entries
function loadSavedDates() {
    const savedDatesList = document.getElementById("saved-dates-list");
    savedDatesList.innerHTML = ""; // Clear list

    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    if (entries.length === 0) {
        savedDatesList.innerHTML = "<li>No entries saved yet.</li>";
        return;
    }

    entries.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = entry.date;
        listItem.addEventListener("click", () => {
            alert(
                `Date: ${entry.date}\n3 Good Things: ${entry.goodThings}\n2 Appreciations: ${entry.appreciations}\n1 Improvement: ${entry.improvement}`
            );
        });
        savedDatesList.appendChild(listItem);
    });
}
