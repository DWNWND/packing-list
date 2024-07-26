import { pushToArray, removeFromArray, pushCheckedToArray } from "./arrays.js";
import { listTemplate, listGroupTemplate, newItemFooterTemplate, itemTemplate } from "./templates.js";
import { initializeStorage, addRandomItemIds, mainclothes, mainelectronics, mainmischellaneous } from "./initObj.js";

function app() {
  addLuggage();
  addItem();
}
app();

//as of now "luggageType" can only be one word
function addLuggage(luggageType = "main") {
  const listsContainer = document.getElementById("lists");
  const luggageCard = listTemplate(luggageType);

  // add the other luggage types here as well
  if (luggageType === "main") {
    const luggage = localStorage.getItem("mainLuggage");
    var parsedLuggage;
    if (!luggage) {
      console.log("running no luggage");
      addRandomItemIds(mainelectronics);
      addRandomItemIds(mainmischellaneous);
      addRandomItemIds(mainclothes);
      initializeStorage();
      const startLuggage = localStorage.getItem("mainLuggage");
      parsedLuggage = JSON.parse(startLuggage);
    } else {
      parsedLuggage = JSON.parse(luggage);
    }
    for (const [key, value] of Object.entries(parsedLuggage)) {
      const listGroup = listGroupTemplate(luggageType, key, value);
      luggageCard.appendChild(listGroup);
    }
  }

  const cardFooter = newItemFooterTemplate(luggageType.toLowerCase());
  luggageCard.appendChild(cardFooter);
  listsContainer.appendChild(luggageCard);

  removeItem();
  checkedItem(parsedLuggage);
}

function addItem(luggageType = "Main") {
  const newItemForm = document.getElementById(`${luggageType.toLowerCase()}NewItemForm`);
  const newItemInput = document.getElementById("newItem");
  const clothesCategoryCheck = document.getElementById("clothesCategoryCheck");
  const electronicsCategoryCheck = document.getElementById("electronicsCategoryCheck");
  const mischellaneousCategoryCheck = document.getElementById("mischellaneousCategoryCheck");

  newItemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (clothesCategoryCheck.checked && !electronicsCategoryCheck.checked && !mischellaneousCategoryCheck.checked) {
      pushToArray("mainLuggage", "clothes", newItemInput.value);
    }
    if (electronicsCategoryCheck.checked && !clothesCategoryCheck.checked && !mischellaneousCategoryCheck.checked) {
      pushToArray("mainLuggage", "electronics", newItemInput.value);
    }
    if (mischellaneousCategoryCheck.checked && !clothesCategoryCheck.checked && !electronicsCategoryCheck.checked) {
      pushToArray("mainLuggage", "mischellaneous", newItemInput.value);
    }
    if (!clothesCategoryCheck.checked && !electronicsCategoryCheck.checked && !mischellaneousCategoryCheck.checked) {
      alert("You must choose an item category."); //add these messages as user feedback instead
    } else if ((clothesCategoryCheck.checked && electronicsCategoryCheck.checked && !mischellaneousCategoryCheck.checked) || (clothesCategoryCheck.checked && mischellaneousCategoryCheck.checked && !electronicsCategoryCheck.checked) || (electronicsCategoryCheck.checked && mischellaneousCategoryCheck.checked && !clothesCategoryCheck.checked)) {
      alert("You can only choose one item category."); //add these messages as user feedback instead
    }
    removeItem();
    checkedItem();
  });
}

function removeItem() {
  const removeX = document.querySelectorAll(".x-remove");
  removeX.forEach((x) => {
    x.addEventListener("click", (e) => {
      const target = e.target;
      const id = target.id;
      const itemId = id.slice(6);

      const liElement = target.parentElement;
      const ulElement = liElement.parentElement;
      const groupId = ulElement.id;

      console.log(groupId);
      console.log(itemId);

      removeFromArray(groupId, itemId);
      liElement.remove();
    });
  });
}

function checkedItem() {
  const checkboxes = document.querySelectorAll(".item-checkboxes");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const target = e.target;
      const id = target.id;
      const getsChecked = target.checked;
      const labels = document.querySelectorAll("label");
      labels.forEach((label) => {
        if (label.htmlFor == id) {
          const item = label.innerText;
          const groupCategory = target.value;
          console.log(groupCategory);
          pushCheckedToArray(groupCategory, item, id, getsChecked);
          label.classList.toggle("checked");
        }
      });
    });
  });
}
