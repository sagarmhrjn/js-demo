// loads html ans script 
document.addEventListener("DOMContentLoaded",

    // anonymous funtion: event handler
    function () {
        // selects element with the id     
        const itemList = document.getElementById("item-list");
        const newItemInput = document.getElementById("new-item");
        const addButton = document.getElementById("add-button");

        // add a click event to the button 
        addButton.addEventListener("click", function () {
            const newItemText = newItemInput.value;
            if (newItemText.trim() === "") return;

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item-container");

            const itemText = document.createElement("span");
            itemText.textContent = newItemText;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", function () {
                const updatedText = prompt("Edit the item:", itemText.textContent);
                if (updatedText !== null) {
                    itemText.textContent = updatedText;
                }
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                const confirmed = confirm("Delete this item?");
                if (confirmed) {
                    itemList.removeChild(itemContainer);
                }
            });

            itemContainer.appendChild(itemText);
            itemContainer.appendChild(editButton);
            itemContainer.appendChild(deleteButton);

            itemList.appendChild(itemContainer);
            newItemInput.value = ""; // Clear the input field
        });
    });
