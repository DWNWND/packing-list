import { itemTemplate } from "../../templates/index.js";

export function pushToArray(luggageType, checkedCategory, newItem) {
  const luggage = localStorage.getItem(luggageType);
  const parsedLuggage = JSON.parse(luggage);
  const newClothesArr = parsedLuggage.clothes;
  const newElectronicsArr = parsedLuggage.electronics;
  const newMischellaneousArr = parsedLuggage.mischellaneous;

  var randomId = "id" + Math.random().toString(16).slice(2);

  const item = {
    item: newItem,
    checked: false,
    id: randomId,
  };

  if (checkedCategory.toLowerCase().includes("clothes")) {
    newClothesArr.push(item);

    const groupContainer = document.getElementById(`${luggageType}clothes`);
    const listItem = itemTemplate(newItem, false, randomId, "clothes");
    groupContainer.append(listItem);
  }
  if (checkedCategory.toLowerCase().includes("electronics")) {
    newElectronicsArr.push(item);

    const groupContainer = document.getElementById(`${luggageType}electronics`);
    const listItem = itemTemplate(newItem, false, randomId, "electronics");
    groupContainer.append(listItem);
  }
  if (checkedCategory.toLowerCase().includes("mischellaneous")) {
    newMischellaneousArr.push(item);

    const groupContainer = document.getElementById(`${luggageType}mischellaneous`);
    const listItem = itemTemplate(newItem, false, randomId, "mischellaneous");
    groupContainer.append(listItem);
  }

  const newLuggage = {
    clothes: newClothesArr,
    electronics: newElectronicsArr,
    mischellaneous: newMischellaneousArr,
  };

  localStorage.setItem(luggageType, JSON.stringify(newLuggage));
}
