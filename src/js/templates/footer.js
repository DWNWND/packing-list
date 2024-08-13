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

  const checkClothes = document.createElement("div");
  checkClothes.classList.add("form-check");
  const checkClothesInput = document.createElement("input");
  checkClothesInput.classList.add("form-check-input");
  checkClothesInput.type = "checkbox";
  checkClothesInput.id = `${luggageType}clothesCategoryCheck`;
  const checkClothesLabel = document.createElement("label");
  checkClothesLabel.classList.add("form-check-label");
  checkClothesLabel.htmlFor = `${luggageType}clothesCategoryCheck`;
  checkClothesLabel.innerText = "clothes";

  const checkElectronics = document.createElement("div");
  checkElectronics.classList.add("form-check");
  const checkElectronicsInput = document.createElement("input");
  checkElectronicsInput.classList.add("form-check-input");
  checkElectronicsInput.type = "checkbox";
  checkElectronicsInput.id = `${luggageType}electronicsCategoryCheck`;
  const checkElectronicsLabel = document.createElement("label");
  checkElectronicsLabel.classList.add("form-check-label");
  checkElectronicsLabel.htmlFor = `${luggageType}electronicsCategoryCheck`;
  checkElectronicsLabel.innerText = "electronics";

  const checkMischellaneous = document.createElement("div");
  checkMischellaneous.classList.add("form-check");
  const checkMischellaneousInput = document.createElement("input");
  checkMischellaneousInput.classList.add("form-check-input");
  checkMischellaneousInput.type = "checkbox";
  checkMischellaneousInput.id = `${luggageType}mischellaneousCategoryCheck`;
  const checkMischellaneousLabel = document.createElement("label");
  checkMischellaneousLabel.classList.add("form-check-label");
  checkMischellaneousLabel.htmlFor = `${luggageType}mischellaneousCategoryCheck`;
  checkMischellaneousLabel.innerText = "mischellaneous";

  const feedback = document.createElement("div");
  feedback.classList.add("invalid-feedback");
  feedback.innerText = "You must choose an item category.";

  checkClothes.append(checkClothesInput, checkClothesLabel);
  checkElectronics.append(checkElectronicsInput, checkElectronicsLabel);
  newItemInputWrapper.append(input);
  inputLabelWrapper.append(label, line, newItemInputWrapper);
  checkMischellaneous.append(checkMischellaneousInput, checkMischellaneousLabel, feedback);
  categoryCheckmarksWrapper.append(checkClothes, checkElectronics, checkMischellaneous);

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