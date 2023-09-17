var listItems = document.querySelectorAll(".list-item");
var draggedItem = 0;

listItems.forEach(function (item, index) {
  item.innerText = `Bài ${index + 1}: ${item.innerText}`;
  item.style.add;
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("drop", drop);
  item.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  draggedItem = this;
}

function dragOver(e) {
  e.preventDefault();
}

function drop() {
  if (draggedItem !== this) {
    var parent = this.parentNode;

    parent.insertBefore(draggedItem, this.nextSibling);

    updateIndex();
  }
}

function dragEnd() {
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
