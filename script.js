const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((list, idx) => {
  list.addEventListener("click", () => {
    hideAllLists();
    hideAllContents();

    list.classList.add("active");
    contents[idx].classList.add("show");
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
