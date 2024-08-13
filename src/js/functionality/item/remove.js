import { removeFromArray } from "../array/index.js";

export function removeItem() {
  const removeX = document.querySelectorAll(".x-remove");
  removeX.forEach((x) => {
    x.addEventListener("click", (e) => {
      e.preventDefault();

      const target = e.target;
      const id = target.id;
      const itemId = id.slice(6);

      const liElement = target.parentElement;
      const ulElement = liElement.parentElement;
      const groupId = ulElement.id;

      var luggageType;
      if (groupId.includes("main")) {
        luggageType = "mainLuggage";
      }
      if (groupId.includes("purse")) {
        luggageType = "purseLuggage";
      }
      if (groupId.includes("personal")) {
        luggageType = "personalLuggage";
      }
      if (groupId.includes("pet")) {
        luggageType = "petCarrier";
      }
      if (groupId.includes("cabin")) {
        luggageType = "cabinLuggage";
      } else if (!luggageType) {
        throw new Error("Please provide a luggage type.");
      }
      removeFromArray(groupId, itemId, luggageType);
      liElement.remove();
      location.reload();
    });
  });
}

export function removeList() {
  const removeX = document.querySelectorAll(".x-remove-list");
  removeX.forEach((x) => {
    x.addEventListener("click", (e) => {
      e.preventDefault();

      const target = e.target;
      const id = target.id;
      const itemId = id.slice(6);

      const card = document.getElementById(itemId);

      localStorage.removeItem(itemId);
      card.remove();
      location.reload();
    });
  });
}
