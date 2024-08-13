export function removeFromArray(groupId, itemId, luggageType) {
  const luggage = localStorage.getItem(luggageType);
  const parsedLuggage = JSON.parse(luggage);

  console.log(luggageType);

  const clothesArr = parsedLuggage.clothes;
  const electronicsArr = parsedLuggage.electronics;
  const mischellaneousArr = parsedLuggage.mischellaneous;
  const footwearArr = parsedLuggage.footwear;
  const toiletriesArr = parsedLuggage.toiletries;
  const personalitemsArr = parsedLuggage.personalitems;

  if (luggageType && groupId && itemId) {
    if (groupId.includes("clothes")) {
      const newClothesArr = clothesArr.filter((item) => item.id !== itemId);

      const newLuggage = {
        clothes: newClothesArr,
        electronics: electronicsArr,
        mischellaneous: mischellaneousArr,
        footwear: footwearArr,
        toiletries: toiletriesArr,
        personalitems: personalitemsArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(newLuggage));
    }
    if (groupId.includes("electronics")) {
      const newElectronicsArr = electronicsArr.filter((item) => item.id !== itemId);

      const newLuggage = {
        clothes: clothesArr,
        electronics: newElectronicsArr,
        mischellaneous: mischellaneousArr,
        footwear: footwearArr,
        toiletries: toiletriesArr,
        personalitems: personalitemsArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(newLuggage));
    }
    if (groupId.includes("mischellaneous")) {
      const newMischellaneousArr = mischellaneousArr.filter((item) => item.id !== itemId);

      const newLuggage = {
        clothes: clothesArr,
        electronics: electronicsArr,
        mischellaneous: newMischellaneousArr,
        footwear: footwearArr,
        toiletries: toiletriesArr,
        personalitems: personalitemsArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(newLuggage));
    }
    if (groupId.includes("footwear")) {
      const newFootwearArr = footwearArr.filter((item) => item.id !== itemId);

      const newLuggage = {
        clothes: clothesArr,
        electronics: electronicsArr,
        mischellaneous: mischellaneousArr,
        footwear: newFootwearArr,
        toiletries: toiletriesArr,
        personalitems: personalitemsArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(newLuggage));
    }
    if (groupId.includes("toiletries")) {
      const newToiletriesArr = toiletriesArr.filter((item) => item.id !== itemId);

      const newLuggage = {
        clothes: clothesArr,
        electronics: electronicsArr,
        mischellaneous: mischellaneousArr,
        footwear: footwearArr,
        toiletries: newToiletriesArr,
        personalitems: personalitemsArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(newLuggage));
    }
    if (groupId.includes("personalitems")) {
      const newPersonalitemsArr = personalitemsArr.filter((item) => item.id !== itemId);

      const newLuggage = {
        clothes: clothesArr,
        electronics: electronicsArr,
        mischellaneous: mischellaneousArr,
        footwear: footwearArr,
        toiletries: toiletriesArr,
        personalitems: newPersonalitemsArr,
      };
      localStorage.setItem(luggageType, JSON.stringify(newLuggage));
    }
  } else {
    throw new Error("Please provide a group id and item id to remove an item.");
  }
}
