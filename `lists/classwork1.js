// Wait until the HTML content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // ===== Select elements from the page =====
    var input = document.getElementById("bmwInput");    // Input box for new BMW items
    var addBtn = document.getElementById("addBtn");    // Add button
    var modelsList = document.getElementById("bmwModels"); // UL list for BMW models
    var modsList = document.getElementById("bmwMods");     // OL list for BMW mods

    // ===== Function to make list items removable =====
    function makeRemovable(list) {
        // Select all <li> elements inside the given list
        var items = list.querySelectorAll("li");

        // Loop through each list item
        for (var i = 0; i < items.length; i++) {
            // Add a click event listener to remove the item when clicked
            items[i].addEventListener("click", function () {
                this.remove(); // 'this' refers to the clicked <li>
            });
        }
    }

    // Make all existing items removable
    makeRemovable(modelsList);
    makeRemovable(modsList);

    // ===== Add new item to the models list when Add button is clicked =====
    addBtn.addEventListener("click", function () {
        // Check if input is not empty (ignores spaces)
        if (input.value.trim() !== "") {
            // Create a new list item <li>
            var newItem = document.createElement("li");
            newItem.textContent = input.value; // Set the text to the input value

            // Make the new item removable on click
            newItem.addEventListener("click", function () {
                this.remove();
            });

            // Add the new item to the models list
            modelsList.appendChild(newItem);

            // Clear the input box after adding
            input.value = "";
        }
    });

});
