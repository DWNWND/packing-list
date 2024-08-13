export function pushCheckedToArray(groupCategory, selectedItem, itemId, getsChecked, luggageType) {
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
    const newLuggage = {
      clothes: newClothesArr,
      electronics: newElectronicsArr,
      mischellaneous: newMischellaneousArr,
    };
    localStorage.setItem(luggageType, JSON.stringify(newLuggage));
  } else {
    throw new Error("Please provide a group category and item id to check an item.");
  }
}
