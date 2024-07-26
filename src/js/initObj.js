export var mainelectronics = [
  { item: "charger", checked: false },
  { item: "headset", checked: false },
  { item: "laptop", checked: false },
];
export var mainmischellaneous = [
  { item: "book", checked: false },
  { item: "snacks", checked: false },
  { item: "toothbrush", checked: false },
];
export var mainclothes = [
  { item: "shorts", checked: false },
  { item: "t-shirt", checked: false },
  { item: "socks", checked: false },
];

export function addRandomItemIds(array) {
  array.forEach((item) => {
    var id = "id" + Math.random().toString(16).slice(2);
    item["id"] = id;
  });
}

export function initializeStorage() {
  const mainLuggage = {
    clothes: mainclothes,
    electronics: mainelectronics,
    mischellaneous: mainmischellaneous,
  };
  localStorage.setItem("mainLuggage", JSON.stringify(mainLuggage));
}
