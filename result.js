
// Get saved data
const savedData = localStorage.getItem("lifeWrappedData");


// If no data exists
if (!savedData) {

    alert("No Life Wrapped data found.");

    window.location.href = "form.html";

}


// Convert stored JSON back into an object
const data = JSON.parse(savedData);


// =========================
// PUT DATA INTO PAGE
// =========================

document.getElementById("userName").textContent = data.name;
document.getElementById("finalName").textContent = data.name;

document.getElementById("year").textContent = data.year;

document.getElementById("trips").textContent = data.trips;
document.getElementById("tripsBig").textContent = data.trips;
document.getElementById("favoritePlace").textContent =
    data.favoritePlace || "No place added";

document.getElementById("workouts").textContent = data.workouts;
document.getElementById("workoutsBig").textContent = data.workouts;
document.getElementById("fitnessGoal").textContent =
    data.fitnessGoal || "Keep going!";

document.getElementById("books").textContent = data.books;
document.getElementById("booksBig").textContent = data.books;
document.getElementById("skill").textContent =
    data.skill || "Always learning";

document.getElementById("movies").textContent = data.movies;
document.getElementById("moviesBig").textContent = data.movies;
document.getElementById("songs").textContent =
    data.songs || "No song added";

document.getElementById("bestMoment").textContent =
    data.bestMoment || "You had many amazing moments.";

document.getElementById("achievement").textContent =
    data.achievement || "You accomplished more than you realize.";

document.getElementById("lesson").textContent =
    data.lesson || "Every year teaches us something new.";

document.getElementById("finalTrips").textContent = data.trips;
document.getElementById("finalWorkouts").textContent = data.workouts;
document.getElementById("finalBooks").textContent = data.books;
document.getElementById("finalMovies").textContent = data.movies;


// =========================
// SCREEN NAVIGATION
// =========================

const screens = document.querySelectorAll(".wrapped-screen");

let currentScreen = 0;


function showNext() {

    // Hide current screen
    screens[currentScreen].classList.add("hidden");

    // Move to next screen
    currentScreen++;

    // Show next screen
    if (currentScreen < screens.length) {

        screens[currentScreen].classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


// =========================
// RESTART
// =========================

function restartWrapped() {

    localStorage.removeItem("lifeWrappedData");

    window.location.href = "form.html";

}
