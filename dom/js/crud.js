import data from "./items.json" assert { type: "json" };

// get dom element by id
const form = document.getElementById("menu-form");
const menu = document.getElementById("menu");
const input = document.querySelector(`#${form.id} input`);
const error = document.getElementById("error-message");

// a variable to store the last id
let lastID;

// array of item objects
let items = data.items;

// initial display of all items
function display(items) {
  menu.innerHTML = "";
  items.forEach((item) => {
    createItem(item.id, "list-group-item", item.itemName, menu, "li");
  });
}

// get the next possible id
function getNextID() {
  if (!lastID) {
    items.sort((item1, item2) => {
      item1.id < item2.id ? 1 : item1.id > item2.id ? -1 : 0;
    });
    lastID = items[items.length - 1].id;
  }
  return ++lastID;
}

// add item from items list
function addItems(id, text) {
  const Item = { id: id, itemName: text };
  items.push(Item);
}

// remove item from items list by id
function removeItems(id) {
  items = items.filter((item) => item.id !== id);
}

// edit item in items
function editItems(id, editText) {
  items.forEach((item) => {
    if (item.id == id) {
      item.itemName = editText;
    }
  });
  console.log(items);
}

// show error message
function showErrorMessage(message) {
  error.style.visibility = "visible";
  error.textContent = message;
}

// validate form input
function validation(form) {
  const insertedItemName = input.value.trim();
  if (insertedItemName === "") {
    return { isvalid: false, message: "input field cannot be empty" };
  } else {
    return { isvalid: true };
  }
}

function getItem(id) {
  items.forEach((item) => {
    if (item.id == id) {
      return item;
    }
  });
}

// create a button with event on click event listener
function createRemoveBtn(newMenuItem, id) {
  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "btn");
  const removeimg = document.createElement("img");
  removeimg.setAttribute("src", "./assets/images/trash.png");
  removeBtn.addEventListener("click", (event) => {
    removeItems(id);
    menu.removeChild(document.getElementById("" + id));
  });
  removeBtn.appendChild(removeimg);
  newMenuItem.appendChild(removeBtn);
}

function createEditBtn(newMenuItem, id) {
  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "btn");
  const editimg = document.createElement("img");
  editimg.setAttribute("src", "./assets/images/edit.svg");

  editBtn.addEventListener("click", (event) => {
    console.log(event);
    console.log(id);
    const value = prompt("edit item", "");
    editItems(id, value);
    document.querySelector;
    console.log(items);
    display(items);
  });
  editBtn.appendChild(editimg);

  newMenuItem.appendChild(editBtn);
}

function createItem(id, className, itemName, parent, tag) {
  // create a new list element
  const newMenuItem = document.createElement(tag);
  const div = document.createElement("div");

  // set class and id
  newMenuItem.setAttribute("class", className);
  newMenuItem.setAttribute("id", id);

  // create text, delete and edit
  const text = document.createTextNode(itemName);

  newMenuItem.style.display = "flex";
  newMenuItem.style.justifyContent = "space-between";
  newMenuItem.style.alignItems = "center";

  // append to child to li element
  newMenuItem.appendChild(text);
  createEditBtn(div, id);
  createRemoveBtn(div, id);
  newMenuItem.appendChild(div);

  parent.appendChild(newMenuItem);
}

input.addEventListener("change", () => {
  error.style.visibility = "hidden";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const valid = validation(form);

  if (valid.isvalid) {
    const id = getNextID();
    createItem(id, "list-group-item", input.value, menu, "li");
    addItems(id, input.value);
    console.log(items);
    input.value = "";
  } else {
    showErrorMessage(valid.message);
  }
});

display(items);
