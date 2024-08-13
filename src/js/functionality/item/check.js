import { pushCheckedToArray } from "../array/index.js";

export function checkedItem() {
  const checkboxes = document.querySelectorAll(".item-checkboxes");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const target = e.target;
      const id = target.id;
      const getsChecked = target.checked;
      const labels = document.querySelectorAll("label");
      labels.forEach((label) => {
        if (label.htmlFor === id) {
          const item = label.innerText;
          const groupCategory = target.value;

          var luggageType;
          if (groupCategory.includes("main")) {
            luggageType = "mainLuggage";
          }
          if (groupCategory.includes("purse")) {
            luggageType = "purseLuggage";
          }
          if (groupCategory.includes("personal")) {
            luggageType = "personalLuggage";
          }
          if (groupCategory.includes("pet")) {
            luggageType = "petCarrier";
          }
          if (groupCategory.includes("cabin")) {
            luggageType = "cabinLuggage";
          } else if (!luggageType) {
            throw new Error("Please provide a luggage type.");
          }
          pushCheckedToArray(groupCategory, item, id, getsChecked, luggageType);
          label.classList.toggle("checked");
        }
      });
    });
  });
}
