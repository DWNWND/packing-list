export function newItemFooterTemplate(luggageType) {
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const form = document.createElement("form");
  // form.classList.add("needs-validation");
  // form.noValidate = true;
  form.id = `${luggageType}NewItemForm`;

  const formWrapper = document.createElement("div");
  formWrapper.classList.add("form-wrapper");

  const formContentWrapper = document.createElement("div");
  formContentWrapper.classList.add("form-content-wrapper");

  const inputLabelWrapper = document.createElement("div");
  inputLabelWrapper.classList.add("input-label-wrapper");

  const label = document.createElement("label");
  label.htmlFor = `${luggageType}newItem`;
  label.classList.add("form-label", "text-uppercase");
  label.innerText = "add item";

  const line = document.createElement("div");
  line.classList.add("line");

  const newItemInputWrapper = document.createElement("div");
  newItemInputWrapper.classList.add("new-item-input-wrapper");

  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("form-control");
  input.id = `${luggageType}newItem`;
  input.placeholder = "Example: 3 pair of socks";
  input.required = true;

  const categoryCheckmarksWrapper = document.createElement("div");
  categoryCheckmarksWrapper.classList.add("category-checkmarks-wrapper", "required"); //add function connected to the required class

  const checkClothes = makeCheckboxFor(luggageType, "clothes");
  const checkElectronics = makeCheckboxFor(luggageType, "electronics");
  const checkMischellaneous = makeCheckboxFor(luggageType, "mischellaneous");
  const checkFootwear = makeCheckboxFor(luggageType, "footwear"); 
  const checkToiletries = makeCheckboxFor(luggageType, "toiletries");
  const checkPersonalitems = makeCheckboxFor(luggageType, "personalitems");

  const feedback = document.createElement("div");
  feedback.classList.add("invalid-feedback");
  feedback.innerText = "You must choose an item category.";

  newItemInputWrapper.append(input);
  inputLabelWrapper.append(label, line, newItemInputWrapper);
  categoryCheckmarksWrapper.append(checkClothes, checkElectronics, checkMischellaneous, checkFootwear, checkToiletries, checkPersonalitems);

  const information = document.createElement("div");
  information.classList.add("information");
  information.innerText = "Please do not add sensitive information to the lists.";

  formContentWrapper.append(inputLabelWrapper, categoryCheckmarksWrapper, information);

  const submitbtnWrapper = document.createElement("div");
  submitbtnWrapper.classList.add("submitbtn-wrapper");
  const submitbtn = document.createElement("button");
  submitbtn.classList.add("btn", "btn-primary", "text-uppercase");
  submitbtn.type = "submit";
  submitbtn.innerText = "add";
  submitbtn.setAttribute("for", `${luggageType}NewItemForm`);

  submitbtnWrapper.append(submitbtn);
  formWrapper.append(formContentWrapper, submitbtnWrapper);
  form.append(formWrapper);
  cardFooter.append(form);
  return cardFooter;
}

function makeCheckboxFor(luggageType, groupType) {
  const checkbox = document.createElement("div");
  checkbox.classList.add("form-check");
  const checkboxInput = document.createElement("input");
  checkboxInput.classList.add("form-check-input");
  checkboxInput.type = "checkbox";
  checkboxInput.id = `${luggageType}${groupType}CategoryCheck`;
  const checkboxLabel = document.createElement("label");
  checkboxLabel.classList.add("form-check-label");
  checkboxLabel.htmlFor = `${luggageType}${groupType}CategoryCheck`;
  checkboxLabel.innerText = groupType;

  checkbox.append(checkboxInput, checkboxLabel);

  return checkbox;
}
