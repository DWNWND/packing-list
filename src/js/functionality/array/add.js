import { itemTemplate } from "../../templates/index.js";

export function pushToArray(luggageType, checkedCategory, newItem) {
  const luggage = localStorage.getItem(luggageType);
  const parsedLuggage = JSON.parse(luggage);
  const newClothesArr = parsedLuggage.clothes;
  const newElectronicsArr = parsedLuggage.electronics;
  const newMischellaneousArr = parsedLuggage.mischellaneous;
  const newFootwearArr = parsedLuggage.footwear;
  const newToiletriesArr = parsedLuggage.toiletries;
  const newPersonalitemsArr = parsedLuggage.personalitems;

  var randomId = "id" + Math.random().toString(16).slice(2);

  const item = {
    item: newItem,
    checked: false,
    id: randomId,
  };

  if (checkedCategory.toLowerCase().includes("clothes")) {
    newClothesArr.push(item);
  }
  if (checkedCategory.toLowerCase().includes("electronics")) {
    newElectronicsArr.push(item);
  }
  if (checkedCategory.toLowerCase().includes("mischellaneous")) {
    newMischellaneousArr.push(item);
  }
  if (checkedCategory.toLowerCase().includes("footwear")) {
    newFootwearArr.push(item);
  }
  if (checkedCategory.toLowerCase().includes("toiletries")) {
    newToiletriesArr.push(item);
  }
  if (checkedCategory.toLowerCase().includes("personalitems")) {
    newPersonalitemsArr.push(item);
  }

  const newLuggage = {
    clothes: newClothesArr,
    electronics: newElectronicsArr,
    mischellaneous: newMischellaneousArr,
    footwear: newFootwearArr,
    toiletries: newToiletriesArr,
    personalitems: newPersonalitemsArr,
  };

  localStorage.setItem(luggageType, JSON.stringify(newLuggage));
}
