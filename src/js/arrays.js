import { itemTemplate } from "./templates.js";

export function pushToArray(luggageType = "mainLuggage", checkedCategory, newItem) {
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

    const groupContainer = document.getElementById("mainclothes");
    const listItem = itemTemplate(newItem, false, randomId, "clothes");
    groupContainer.append(listItem);
  }
  if (checkedCategory.toLowerCase().includes("electronics")) {
    newElectronicsArr.push(item);

    const groupContainer = document.getElementById("mainelectronics");
    const listItem = itemTemplate(newItem, false, randomId, "electronics");
    groupContainer.append(listItem);
  }
  if (checkedCategory.toLowerCase().includes("mischellaneous")) {
    newMischellaneousArr.push(item);

    const groupContainer = document.getElementById("mainmischellaneous");
    const listItem = itemTemplate(newItem, false, randomId, "mischellaneous");
    groupContainer.append(listItem);
  }

  const mainLuggage = {
    clothes: newClothesArr,
    electronics: newElectronicsArr,
    mischellaneous: newMischellaneousArr,
  };

  localStorage.setItem("mainLuggage", JSON.stringify(mainLuggage));
}

export function pushCheckedToArray(groupCategory, selectedItem, itemId, getsChecked, luggageType = "mainLuggage") {
  const luggage = localStorage.getItem(luggageType);
  const parsedLuggage = JSON.parse(luggage);

  var newClothesArr = parsedLuggage.clothes;
  var newElectronicsArr = parsedLuggage.electronics;
  var newMischellaneousArr = parsedLuggage.mischellaneous;

  var itemChecked;

  if (getsChecked) {
    itemChecked = { item: selectedItem, checked: true, id: itemId };
  } else if (!getsChecked) {
    itemChecked = { item: selectedItem, checked: false, id: itemId };
  }
  if ((luggageType, groupCategory, itemId)) {
    if (groupCategory.toLowerCase().includes("clothes")) {
      const indexOfCheckedItem = newClothesArr.findIndex((item) => item.id === itemId);
      newClothesArr.splice(indexOfCheckedItem, 1, itemChecked);
    } else if (groupCategory.toLowerCase().includes("electronics")) {
      const indexOfCheckedItem = newElectronicsArr.findIndex((item) => item.item === selectedItem);
      newElectronicsArr.splice(indexOfCheckedItem, 1, itemChecked);
    } else if (groupCategory.toLowerCase().includes("mischellaneous")) {
      const indexOfCheckedItem = newMischellaneousArr.findIndex((item) => item.item === selectedItem);
      newMischellaneousArr.splice(indexOfCheckedItem, 1, itemChecked);
    }
    const mainLuggage = {
      clothes: newClothesArr,
      electronics: newElectronicsArr,
      mischellaneous: newMischellaneousArr,
    };
    localStorage.setItem("mainLuggage", JSON.stringify(mainLuggage));
  } else {
    throw new Error("Please provide a group category and item id to check an item.");
  }
}

export function removeFromArray(groupId, itemId, luggageType = "mainLuggage") {
  const luggage = localStorage.getItem(luggageType);
  const parsedLuggage = JSON.parse(luggage);

  const clothesArr = parsedLuggage.clothes;
  const electronicsArr = parsedLuggage.electronics;
  const mischellaneousArr = parsedLuggage.mischellaneous;

  if (luggageType && groupId && itemId) {
    if (groupId.includes("clothes")) {
      const newClothesArr = clothesArr.filter((item) => item.id !== itemId);
      console.log(newClothesArr);

      const mainLuggage = {
        clothes: newClothesArr,
        electronics: electronicsArr,
        mischellaneous: mischellaneousArr,
      };
      localStorage.setItem("mainLuggage", JSON.stringify(mainLuggage));
    }
    if (groupId.includes("electronics")) {
      const newElectronicsArr = electronicsArr.filter((item) => item.id !== itemId);

      const mainLuggage = {
        clothes: clothesArr,
        electronics: newElectronicsArr,
        mischellaneous: mischellaneousArr,
      };
      localStorage.setItem("mainLuggage", JSON.stringify(mainLuggage));
    }
    if (groupId.includes("mischellaneous")) {
      const newMischellaneousArr = mischellaneousArr.filter((item) => item.id !== itemId);

      const mainLuggage = {
        clothes: clothesArr,
        electronics: electronicsArr,
        mischellaneous: newMischellaneousArr,
      };
      localStorage.setItem("mainLuggage", JSON.stringify(mainLuggage));
    }
  } else {
    throw new Error("Please provide a group id and item id to remove an item.");
  }
}
