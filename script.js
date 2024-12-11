// Switch between pages
const home = document.getElementById("home");
const entryPage = document.getElementById("entry-page");
const beginButton = document.getElementById("begin-button");
const backButton = document.getElementById("back-button");

beginButton.addEventListener("click", () => {
    home.classList.add("hidden");
    entryPage.classList.remove("hidden");
});

backButton.addEventListener("click", () => {
    entryPage.classList.add("hidden");
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
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));

    alert("Entry saved!");
    document.getElementById("entry-form").reset();
});

// Future: Add a way to view saved entries