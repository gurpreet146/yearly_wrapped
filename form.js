// Get the form
const form = document.getElementById("wrappedForm");


// When the user submits the form
form.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get all form values
    const formData = new FormData(form);


    // Convert form data into a normal JavaScript object
    const lifeData = {

        // About You
        name: formData.get("name"),
        year: formData.get("year"),

        // Travel
        trips: formData.get("trips"),
        favoritePlace: formData.get("favoritePlace"),

        // Fitness
        workouts: formData.get("workouts"),
        fitnessGoal: formData.get("fitnessGoal"),

        // Learning
        books: formData.get("books"),
        skill: formData.get("skill"),

        // Entertainment
        movies: formData.get("movies"),
        songs: formData.get("songs"),

        // Your Year
        bestMoment: formData.get("bestMoment"),
        achievement: formData.get("achievement"),
        lesson: formData.get("lesson")
    };


    // Store the information in browser storage
    localStorage.setItem(
        "lifeWrappedData",
        JSON.stringify(lifeData)
    );


    // Open the result page
    window.location.href = "result.html";

});
