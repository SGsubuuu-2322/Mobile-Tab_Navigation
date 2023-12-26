const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((list, idx) => {
  list.addEventListener("click", () => {
    hideAllLists();
    hideAllContents();
  });
});

function hideAllLists() {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
}
function hideAllContents() {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}
