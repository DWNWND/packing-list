export function itemTemplate(items, isChecked, itemId, itemGroup) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item", "d-flex");
  const x = document.createElement("span");
  x.classList.add("x-remove");
  x.textContent = "×";
  x.id = `remove${itemId}`;
  const itemLabel = document.createElement("label");
  itemLabel.classList.add("form-check-label");
  itemLabel.htmlFor = `${itemId}`;
  itemLabel.innerText = items;
  // itemLabel.setAttribute("value", items);
  const itemCheckbox = document.createElement("input");
  itemCheckbox.classList.add("form-check-input", "ms-auto", "item-checkboxes");
  itemCheckbox.type = "checkbox";
  itemCheckbox.id = `${itemId}`;
  itemCheckbox.setAttribute("value", itemGroup + items);
  listItem.append(x, itemLabel, itemCheckbox);

  if (isChecked) {
    itemLabel.classList.add("checked");
    itemCheckbox.checked = true;
  }

  return listItem;
}


export function generateListItems(items, groupContainer) {
  items.forEach((thing) => {
    const listItem = itemTemplate(thing.item, thing.checked, thing.id, groupContainer.id);
    groupContainer.append(listItem);
  });
}

