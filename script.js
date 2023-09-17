var listItems = document.querySelectorAll(".list-item");
var draggedItem = 0;

listItems.forEach((item, index) => {
  item.innerText = `Bài ${index + 1}: ${item.innerText}`;
  item.style.add;
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", drop);
  item.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  draggedItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function drop() {
  var targetIndex = Array.from(listItems).indexOf(this);
  if (draggedItem !== this) {
    var parent = this.parentNode;

    parent.insertBefore(draggedItem, this.nextSibling);

    updateIndex();
  }

  this.classList.remove("over");
}

function dragEnd() {
  setTimeout(() => (this.style.display = "block"), 0);

  updateIndex();
}

function updateIndex() {
  var updateListItems = document.querySelectorAll(".list-item");
  updateListItems.forEach((item, index) => {
    item.innerText = `Bài ${index + 1}: ${item.innerText.substring(
      item.innerText.indexOf(":") + 1
    )}`;
  });
}
