//INT MAIN LUGGAGE
export var mainfootwear = [
  { item: "Sneakers (1)", checked: false },
  { item: "Running shoes (1)", checked: false },
  { item: "Sandals/flip-flops (2-3 pairs)", checked: false },
  { item: "Dress shoes (1)", checked: false },
  { item: "Indoor slippers", checked: false },
];
export var maintoiletries = [
  { item: "Tampons**", checked: false },
  { item: "Hair care (Redken)**", checked: false },
  { item: "Toothpaste**", checked: false },
  { item: "Medication", checked: false },
  { item: "Sun protection**", checked: false },
  { item: "Favourite makeup**", checked: false },
  { item: "Favourite perfume**", checked: false },
];
export var mainpersonalitems = [
  { item: "A cup or keepsake from home", checked: false },
  { item: "My favourite pillowcase", checked: false },
  { item: "My favourite beach sarong", checked: false },
];
export var mainmischellaneous = [
  { item: "Rock climbing equipment", checked: false },
  { item: "My cats favourite cat toys", checked: false },
  { item: "Cat brushes", checked: false },
  { item: "Cat shaving machine", checked: false },
  { item: "Cat food (enough until a replacement is found)**", checked: false },
  { item: "Choclate/snacks from home", checked: false },
  { item: "Tracksuit for flying**", checked: false },
  { item: "Sunglasses (1-3 pairs)", checked: false },
  { item: "Bags (your favourites)", checked: false },
  { item: "Scarves/shawls (2-3)", checked: false },
];
export var mainclothes = [
  { item: "Socks (7-10 pairs)", checked: false },
  { item: "Underwear (10-14 pairs)**", checked: false },
  { item: "Bras**", checked: false },
  { item: "Party/evening dresses (1-2)", checked: false },
  { item: "Everyday dresses (3-4)", checked: false },
  { item: "Beach dresses (2-3)", checked: false },
  { item: "Shorts (4-5)", checked: false },
  { item: "Skirts (2-3)", checked: false },
  { item: "Singlets and T-shirts (7-10)**", checked: false },
  { item: "Long-sleeved shirts/sweaters (2-3)", checked: false },
  { item: "Dress shirts/blouses (2-3)", checked: false },
  { item: "Rainy wear/windbreaker (1)", checked: false },
  { item: "Light jacket (1)", checked: false },
  { item: "Trousers/pants (3-4)", checked: false },
  { item: "Jeans (1-2)", checked: false },
  { item: "Workout wear (3-5 sets)**", checked: false },
  { item: "Swimwear (3-4)**", checked: false },
];

//INT CABIN LUGGAGE
export var cabinelectronics = [
  { item: "charger", checked: false },
  { item: "headset", checked: false },
  { item: "laptop", checked: false },
];
export var cabinmischellaneous = [
  { item: "book", checked: false },
  { item: "snacks", checked: false },
  { item: "toothbrush", checked: false },
];
export var cabinclothes = [
  { item: "shorts", checked: false },
  { item: "t-shirt", checked: false },
  { item: "socks", checked: false },
];

//INT PURSE LUGGAGE
export var purseelectronics = [
  { item: "charger", checked: false },
  { item: "headset", checked: false },
  { item: "laptop", checked: false },
];
export var pursemischellaneous = [
  { item: "book", checked: false },
  { item: "snacks", checked: false },
  { item: "toothbrush", checked: false },
];
export var purseclothes = [
  { item: "shorts", checked: false },
  { item: "t-shirt", checked: false },
  { item: "socks", checked: false },
];

//INT PERSONAL LUGGAGE
export var personalelectronics = [
  { item: "charger", checked: false },
  { item: "headset", checked: false },
  { item: "laptop", checked: false },
];
export var personalmischellaneous = [
  { item: "book", checked: false },
  { item: "snacks", checked: false },
  { item: "toothbrush", checked: false },
];
export var personalclothes = [
  { item: "shorts", checked: false },
  { item: "t-shirt", checked: false },
  { item: "socks", checked: false },
];

//INT PET CARRIER
export var petaccessories = [
  { item: "charger", checked: false },
  { item: "headset", checked: false },
  { item: "laptop", checked: false },
];
export var petmischellaneous = [
  { item: "book", checked: false },
  { item: "snacks", checked: false },
  { item: "toothbrush", checked: false },
];

export function addRandomItemIds(array) {
  array.forEach((item) => {
    var id = "id" + Math.random().toString(16).slice(2);
    item["id"] = id;
  });
}

export function generateIds() {
  addRandomItemIds(mainelectronics);
  addRandomItemIds(mainmischellaneous);
  addRandomItemIds(mainclothes);
  addRandomItemIds(cabinelectronics);
  addRandomItemIds(cabinmischellaneous);
  addRandomItemIds(cabinclothes);
  addRandomItemIds(purseelectronics);
  addRandomItemIds(pursemischellaneous);
  addRandomItemIds(purseclothes);
  addRandomItemIds(personalelectronics);
  addRandomItemIds(personalmischellaneous);
  addRandomItemIds(personalclothes);
  addRandomItemIds(petaccessories);
  addRandomItemIds(petmischellaneous);
}

export function initializeStorage(luggageType) {
  if (luggageType.includes("main")) {
    const mainLuggage = {
      clothes: mainclothes,
      electronics: mainelectronics,
      mischellaneous: mainmischellaneous,
    };
    localStorage.setItem("mainLuggage", JSON.stringify(mainLuggage));
  }
  if (luggageType.includes("cabin")) {
    const cabinLuggage = {
      clothes: cabinclothes,
      electronics: cabinelectronics,
      mischellaneous: cabinmischellaneous,
    };
    localStorage.setItem("cabinLuggage", JSON.stringify(cabinLuggage));
  }

  if (luggageType.includes("personal")) {
    const personalLuggage = {
      clothes: personalclothes,
      electronics: personalelectronics,
      mischellaneous: personalmischellaneous,
    };
    localStorage.setItem("personalLuggage", JSON.stringify(personalLuggage));
  }

  if (luggageType.includes("purse")) {
    const purseLuggage = {
      clothes: purseclothes,
      electronics: purseelectronics,
      mischellaneous: pursemischellaneous,
    };
    localStorage.setItem("purseLuggage", JSON.stringify(purseLuggage));
  }

  if (luggageType.includes("pet")) {
    const petCarrier = {
      accessories: petaccessories,
      mischellaneous: petmischellaneous,
    };
    localStorage.setItem("petCarrier", JSON.stringify(petCarrier));
  } else if (!luggageType) {
    console.error("No luggage type was specified.");
  }
}
