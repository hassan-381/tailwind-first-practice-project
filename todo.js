const myElement = document.getElementById("List");
const addButton = document.getElementById("add-btn");
const input = document.getElementById("inputbox");

addButton.addEventListener("click", function (e) {
  if (input.value != "") {
    let newListItem = document.createElement("li");
    newListItem.textContent = input.value;
    newListItem.classList.add("list-item");

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("btn2");
    closeBtn.textContent = "Close";

    closeBtn.addEventListener("click", function (e) {
      const element = e.target.parentElement;
      element.remove();
    });

    newListItem.appendChild(closeBtn);

    myElement.appendChild(newListItem);
    input.value = "";
  }
});

const closebtns = document.querySelectorAll(".btn2");

for (let i = 0; i < closebtns.length; i++) {
  const btn = closebtns[i];

  btn.addEventListener("click", function (e) {
    const element = e.target.parentElement;
    element.remove();
  });
}
