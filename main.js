let menuItems = [];

function displayMenuItems() {
  const itemsList = document.getElementById("items");
  itemsList.innerHTML = ""; 

  menuItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerText = item;

    const updateButton = document.createElement("button");
    updateButton.className = "btn btn-primary btn-sm mr-2";
    updateButton.innerText = "Update";
    updateButton.addEventListener("click", () => updateMenuItem(index));

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm ";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteMenuItem(index));

    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);
    itemsList.appendChild(listItem);
  });
}

function addMenuItem(newItem) {
  menuItems.push(newItem);
  displayMenuItems(); 
}

function updateMenuItem(index) {
  const updatedItem = prompt("Enter the updated menu item:", menuItems[index]);
  if (updatedItem !== null) {
    menuItems[index] = updatedItem;
    displayMenuItems(); 
  }
}

function deleteMenuItem(index) {
  if (confirm("Are you sure you want to delete this item?")) {
    menuItems.splice(index, 1);
    displayMenuItems(); 
  }
}

const menuForm = document.getElementById("menu-form");
menuForm.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const newItem = document.getElementById("new-menu-item").value;
  if (newItem) {
    addMenuItem(newItem);
    document.getElementById("new-menu-item").value = ""; 
  }
});

displayMenuItems();
