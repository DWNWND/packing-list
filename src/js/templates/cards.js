export function listTemplate(luggageType) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = luggageType;
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "d-flex", "justify-content-between", "align-items-center");
  const lowerCaseLuggageType = luggageType.toLowerCase();

  var cardName;
  if (lowerCaseLuggageType.includes("main")) {
    cardName = "Main Luggage";
  }
  if (lowerCaseLuggageType.includes("purse")) {
    cardName = "Purse";
  }
  if (lowerCaseLuggageType.includes("personal")) {
    cardName = "Personal Luggage";
  }
  if (lowerCaseLuggageType.includes("pet")) {
    cardName = "Pet Carrier";
  }
  if (lowerCaseLuggageType.includes("cabin")) {
    cardName = "Cabin Luggage";
  } else if (!luggageType) {
    throw new Error("Please provide a luggage type.");
  }

  const h2 = document.createElement("h2");
  h2.innerText = cardName;

  const x = document.createElement("div");
  x.classList.add("x-remove-list");

  x.id = `remove${luggageType}`;
  x.innerText = "×";

  cardHeader.append(h2, x);
  card.append(cardHeader);

  return card;
}
