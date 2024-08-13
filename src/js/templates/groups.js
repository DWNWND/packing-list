import { generateListItems } from "./index.js";

export function listGroupTemplate(luggageType, groupType, items) {
  const groupedItems = document.createElement("div");
  groupedItems.classList.add("grouped-items");
  const h3 = document.createElement("h3");
  h3.classList.add("text-uppercase");
  h3.innerText = groupType;
  const listGroup = document.createElement("ul");
  listGroup.classList.add("list-group", "list-group-flush");

  const trimmedLuggageType = luggageType.split(" ");
  const toLowerCase = trimmedLuggageType[0].toLowerCase();
  const newLuggageType = toLowerCase + "Luggage";
  listGroup.id = `${newLuggageType}${groupType}`;

  generateListItems(items, listGroup);
  groupedItems.append(h3, listGroup);

  return groupedItems;
}
