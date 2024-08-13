import { pushToArray } from "../array/index.js";

export function addItem(luggageType) {
  const newItemForm = document.getElementById(`${luggageType}NewItemForm`);
  const newItemInput = document.getElementById(`${luggageType}newItem`);
  const clothesCategoryCheck = document.getElementById(`${luggageType}clothesCategoryCheck`);
  const electronicsCategoryCheck = document.getElementById(`${luggageType}electronicsCategoryCheck`);
  const mischellaneousCategoryCheck = document.getElementById(`${luggageType}mischellaneousCategoryCheck`);
  const footwearCategoryCheck = document.getElementById(`${luggageType}footwearCategoryCheck`);
  const toiletriesCategoryCheck = document.getElementById(`${luggageType}toiletriesCategoryCheck`);
  const personalitemsCategoryCheck = document.getElementById(`${luggageType}personalitemsCategoryCheck`);

  console.log(newItemForm);
  newItemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (clothesCategoryCheck.checked && !electronicsCategoryCheck.checked && !mischellaneousCategoryCheck.checked && !footwearCategoryCheck.checked && !toiletriesCategoryCheck.checked && !personalitemsCategoryCheck.checked) {
      pushToArray(`${luggageType}Luggage`, "clothes", newItemInput.value);
      location.reload();
    }
    if (electronicsCategoryCheck.checked && !clothesCategoryCheck.checked && !mischellaneousCategoryCheck.checked && !footwearCategoryCheck.checked && !toiletriesCategoryCheck.checked && !personalitemsCategoryCheck.checked) {
      pushToArray(`${luggageType}Luggage`, "electronics", newItemInput.value);
      location.reload();
    }
    if (mischellaneousCategoryCheck.checked && !clothesCategoryCheck.checked && !electronicsCategoryCheck.checked && !footwearCategoryCheck.checked && !toiletriesCategoryCheck.checked && !personalitemsCategoryCheck.checked) {
      pushToArray(`${luggageType}Luggage`, "mischellaneous", newItemInput.value);
      location.reload();
    }
    if (footwearCategoryCheck.checked && !electronicsCategoryCheck.checked && !mischellaneousCategoryCheck.checked && !clothesCategoryCheck.checked && !toiletriesCategoryCheck.checked && !personalitemsCategoryCheck.checked) {
      pushToArray(`${luggageType}Luggage`, "footwear", newItemInput.value);
      location.reload();
    }
    if (toiletriesCategoryCheck.checked && !clothesCategoryCheck.checked && !mischellaneousCategoryCheck.checked && !footwearCategoryCheck.checked && !electronicsCategoryCheck.checked && !personalitemsCategoryCheck.checked) {
      pushToArray(`${luggageType}Luggage`, "toiletries", newItemInput.value);
      location.reload();
    }
    if (personalitemsCategoryCheck.checked && !clothesCategoryCheck.checked && !electronicsCategoryCheck.checked && !footwearCategoryCheck.checked && !toiletriesCategoryCheck.checked && !mischellaneousCategoryCheck.checked) {
      pushToArray(`${luggageType}Luggage`, "personalitems", newItemInput.value);
      location.reload();
    }
    if (!clothesCategoryCheck.checked && !electronicsCategoryCheck.checked && !mischellaneousCategoryCheck.checked && !footwearCategoryCheck.checked && !toiletriesCategoryCheck.checked && !personalitemsCategoryCheck.checked) {
      alert("You must choose an item category."); //add these messages as user feedback instead
    } else if ((clothesCategoryCheck.checked && electronicsCategoryCheck.checked && !mischellaneousCategoryCheck.checked) || (clothesCategoryCheck.checked && mischellaneousCategoryCheck.checked && !electronicsCategoryCheck.checked) || (electronicsCategoryCheck.checked && mischellaneousCategoryCheck.checked && !clothesCategoryCheck.checked)) {
      alert("You can only choose one item category."); //add these messages as user feedback instead - fix this to work for all
    }
  });
}
