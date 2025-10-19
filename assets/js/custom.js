// Search Script
document.addEventListener('DOMContentLoaded', function () {
    // Get the search icon element
    var searchIcon = document.getElementById('searchIcon');
    // Get the search bar element
    var searchBar = document.getElementById('searchBar');

    // Add a click event listener to the search icon
    searchIcon.addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Toggle the "d-none" class on the search bar
        searchBar.classList.toggle('d-none');
    });
});



