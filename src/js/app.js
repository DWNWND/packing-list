import { listTemplate, listGroupTemplate, newItemFooterTemplate } from "./templates/index.js";
import { initializeStorage, generateIds } from "./initObj.js";
import { addItem, removeItem, checkedItem } from "./functionality/item/index.js";
import { removeList } from "./functionality/item/index.js";

function app() {
  // addLuggage();
  // addItem();
  generateLuggageOnLoad();
  listenForAddLuggage();
  checkedItem();
}
app();

function checkAmountOfLuggage() {
  const luggageLists = document.querySelectorAll(".card");
  if (luggageLists.length >= 2) {
    const listContainer = document.getElementById("lists");
    listContainer.classList.add("multiple-cards");
  }
}

//as of now "luggageType" can only be one word
function listenForAddLuggage() {
  const addLuggageType = document.querySelectorAll(".dropdown-item");
  addLuggageType.forEach((luggage) => {
    luggage.addEventListener("click", (e) => {
      const luggageType = luggage.innerText;
      addNewLuggages(luggageType);
      checkedItem();
    });
  });
}

function generateLuggageOnLoad() {
  console.log("running generateLuggageOnLoad");

  const mainLuggage = localStorage.getItem("mainLuggage");
  const cabinLuggage = localStorage.getItem("cabinLuggage");
  const personalLuggage = localStorage.getItem("personalLuggage");
  const purseLuggage = localStorage.getItem("purseLuggage");
  const petCarrier = localStorage.getItem("petCarrier");

  window.addEventListener("load", (e) => {
    var parsedLuggage;
    const listsContainer = document.getElementById("lists");

    if (mainLuggage) {
      const luggageType = "mainLuggage";
      const luggageCard = listTemplate(luggageType);
      parsedLuggage = JSON.parse(mainLuggage);
      for (const [key, value] of Object.entries(parsedLuggage)) {
        const listGroup = listGroupTemplate(luggageType, key, value);
        luggageCard.appendChild(listGroup);
        listsContainer.appendChild(luggageCard);
      }
      const cardFooter = newItemFooterTemplate("main");
      luggageCard.appendChild(cardFooter);
      listsContainer.appendChild(luggageCard);

      addItem("main");
    }
    if (cabinLuggage) {
      const luggageType = "cabinLuggage";
      const luggageCard = listTemplate(luggageType);
      parsedLuggage = JSON.parse(cabinLuggage);
      for (const [key, value] of Object.entries(parsedLuggage)) {
        const listGroup = listGroupTemplate(luggageType, key, value);
        luggageCard.appendChild(listGroup);
        listsContainer.appendChild(luggageCard);
      }
      const cardFooter = newItemFooterTemplate("cabin");
      luggageCard.appendChild(cardFooter);
      listsContainer.appendChild(luggageCard);

      addItem("cabin");
    }
    if (personalLuggage) {
      const luggageType = "personalLuggage";
      const luggageCard = listTemplate(luggageType);
      parsedLuggage = JSON.parse(personalLuggage);
      for (const [key, value] of Object.entries(parsedLuggage)) {
        const listGroup = listGroupTemplate(luggageType, key, value);
        luggageCard.appendChild(listGroup);
        listsContainer.appendChild(luggageCard);
      }
      const cardFooter = newItemFooterTemplate("personal");
      luggageCard.appendChild(cardFooter);
      listsContainer.appendChild(luggageCard);

      addItem("personal");
    }
    if (purseLuggage) {
      const luggageType = "purseLuggage";
      const luggageCard = listTemplate(luggageType);
      parsedLuggage = JSON.parse(purseLuggage);
      for (const [key, value] of Object.entries(parsedLuggage)) {
        const listGroup = listGroupTemplate(luggageType, key, value);
        luggageCard.appendChild(listGroup);
        listsContainer.appendChild(luggageCard);
      }
      const cardFooter = newItemFooterTemplate("purse");
      luggageCard.appendChild(cardFooter);
      listsContainer.appendChild(luggageCard);

      addItem("purse");
    }
    if (petCarrier) {
      const luggageType = "petCarrier";
      const luggageCard = listTemplate(luggageType);
      parsedLuggage = JSON.parse(petCarrier);
      for (const [key, value] of Object.entries(parsedLuggage)) {
        const listGroup = listGroupTemplate(luggageType, key, value);
        luggageCard.appendChild(listGroup);
        listsContainer.appendChild(luggageCard);
      }
      const cardFooter = newItemFooterTemplate("pet");
      luggageCard.appendChild(cardFooter);
      listsContainer.appendChild(luggageCard);

      addItem("pet");
    } else if (!mainLuggage && !cabinLuggage && !personalLuggage && !purseLuggage && !petCarrier) {
      //add messages as user feedback instead
      console.log("No luggage found - try adding some luggage");
    }
    removeItem();
    checkedItem();
    removeList();
    checkAmountOfLuggage();
  });
}

async function addNewLuggages(luggageType) {
  console.log("running addLuggage");

  const listsContainer = document.getElementById("lists");
  const luggageCard = listTemplate(luggageType);
  const lowerCaseLuggageType = luggageType.toLowerCase();

  // add the other luggage types here as well
  if (lowerCaseLuggageType.includes("main")) {
    const luggage = localStorage.getItem("mainLuggage");
    if (!luggage) {
      console.log("running no luggage");
      generateIds();
      initializeStorage(lowerCaseLuggageType);
      const startLuggage = localStorage.getItem("mainLuggage");
      parsedLuggage = JSON.parse(startLuggage);
    } else {
      parsedLuggage = JSON.parse(luggage);
    }
    for (const [key, value] of Object.entries(parsedLuggage)) {
      const listGroup = listGroupTemplate(luggageType, key, value);
      luggageCard.appendChild(listGroup);
    }
  }
  if (lowerCaseLuggageType.includes("cabin")) {
    const luggage = localStorage.getItem("cabinLuggage");
    var parsedLuggage;
    if (!luggage) {
      console.log("running with no-luggage");
      generateIds();
      initializeStorage(lowerCaseLuggageType);
      const startLuggage = localStorage.getItem("cabinLuggage");
      parsedLuggage = JSON.parse(startLuggage);
    } else {
      parsedLuggage = JSON.parse(luggage);
    }
    for (const [key, value] of Object.entries(parsedLuggage)) {
      const listGroup = listGroupTemplate(luggageType, key, value);
      luggageCard.appendChild(listGroup);
    }
  }
  if (lowerCaseLuggageType.includes("purse")) {
    const luggage = localStorage.getItem("purseLuggage");
    var parsedLuggage;
    if (!luggage) {
      console.log("running with no-luggage");
      generateIds();
      initializeStorage(lowerCaseLuggageType);
      const startLuggage = localStorage.getItem("purseLuggage");
      parsedLuggage = JSON.parse(startLuggage);
    } else {
      parsedLuggage = JSON.parse(luggage);
    }
    for (const [key, value] of Object.entries(parsedLuggage)) {
      const listGroup = listGroupTemplate(luggageType, key, value);
      luggageCard.appendChild(listGroup);
    }
  }
  if (lowerCaseLuggageType.includes("personal")) {
    const luggage = localStorage.getItem("personalLuggage");
    var parsedLuggage;
    if (!luggage) {
      console.log("running with no-luggage");
      generateIds();
      initializeStorage(lowerCaseLuggageType);
      const startLuggage = localStorage.getItem("personalLuggage");
      parsedLuggage = JSON.parse(startLuggage);
    } else {
      parsedLuggage = JSON.parse(luggage);
    }
    for (const [key, value] of Object.entries(parsedLuggage)) {
      const listGroup = listGroupTemplate(luggageType, key, value);
      luggageCard.appendChild(listGroup);
    }
  }
  if (lowerCaseLuggageType.includes("pet")) {
    const luggage = localStorage.getItem("petCarrier");
    var parsedLuggage;
    if (!luggage) {
      console.log("running with no-luggage");
      generateIds();
      initializeStorage(lowerCaseLuggageType);
      const startLuggage = localStorage.getItem("petCarrier");
      parsedLuggage = JSON.parse(startLuggage);
    } else {
      parsedLuggage = JSON.parse(luggage);
    }
    for (const [key, value] of Object.entries(parsedLuggage)) {
      const listGroup = listGroupTemplate(luggageType, key, value);
      luggageCard.appendChild(listGroup);
    }
  }

  const cardFooter = newItemFooterTemplate(lowerCaseLuggageType);
  luggageCard.appendChild(cardFooter);
  listsContainer.appendChild(luggageCard);

  location.reload();
}
