export function removeFromArray(groupId, itemId, luggageType) {
  const luggage = localStorage.getItem(luggageType);
  const parsedLuggage = JSON.parse(luggage);

  console.log(luggageType);

  const clothesArr = parsedLuggage.clothes;
  const electronicsArr = parsedLuggage.electronics;
  const mischellaneousArr = parsedLuggage.mischellaneous;

  if (luggageType && groupId && itemId) {
    if (groupId.includes("clothes")) {
      const newClothesArr = clothesArr.filter((item) => item.id !== itemId);

      const mainLuggage = {
        clothes: newClothesArr,
        electronics: electronicsArr,
        mischellaneous: mischellaneousArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(mainLuggage));
    }
    if (groupId.includes("electronics")) {
      const newElectronicsArr = electronicsArr.filter((item) => item.id !== itemId);

      const mainLuggage = {
        clothes: clothesArr,
        electronics: newElectronicsArr,
        mischellaneous: mischellaneousArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(mainLuggage));
    }
    if (groupId.includes("mischellaneous")) {
      const newMischellaneousArr = mischellaneousArr.filter((item) => item.id !== itemId);

      const mainLuggage = {
        clothes: clothesArr,
        electronics: electronicsArr,
        mischellaneous: newMischellaneousArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(mainLuggage));
    }
  } else {
    throw new Error("Please provide a group id and item id to remove an item.");
  }
}
