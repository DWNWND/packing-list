import { listTemplate, listGroupTemplate, newItemFooterTemplate } from "./templates/index.js";
import { initializeStorage, generateIds } from "./initObj.js";
import { addItem, removeItem, checkedItem } from "./functionality/item/index.js";
import { removeList } from "./functionality/item/index.js";
import { getDeparturetime, countdown } from "./functionality/departure/getdate.js";
import { resetFunctionality } from "./functionality/storage/reset.js";

function app() {
  // addLuggage();
  // addItem();
  getDeparturetime();
  countdown();
  generateLuggageOnLoad();
  listenForAddLuggage();
  checkedItem();
  resetFunctionality();
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
      location.reload();
    });
  });
}

function generateLuggage(luggage, luggageType, addItemTo) {
  const parsedLuggage = JSON.parse(luggage);
  if (parsedLuggage.clothes.length >= 1 || parsedLuggage.electronics.length > 1 || parsedLuggage.mischellaneous.length > 1 || parsedLuggage.footwear.length > 1 || parsedLuggage.toiletries.length > 1 || parsedLuggage.personalitems.length > 1) {
    const luggageCard = listTemplate(luggageType);
    for (const [key, value] of Object.entries(parsedLuggage)) {
      listGroupTemplate(luggageType, key, value, luggageCard);
    }
    const cardFooter = newItemFooterTemplate(addItemTo);
    luggageCard.appendChild(cardFooter);
    addItem(addItemTo);
  } else {
    console.log("theres luggagecards without content in storage");
  }
}

function generateLuggageOnLoad() {
  console.log("running generateLuggageOnLoad");

  const mainLuggage = localStorage.getItem("mainLuggage");
  const cabinLuggage = localStorage.getItem("cabinLuggage");
  const personalLuggage = localStorage.getItem("personalLuggage");
  const purseLuggage = localStorage.getItem("purseLuggage");
  const petCarrier = localStorage.getItem("petCarrier");

  window.addEventListener("load", (e) => {
    if (mainLuggage) {
      generateLuggage(mainLuggage, "mainLuggage", "main");
    }
    if (cabinLuggage) {
      generateLuggage(cabinLuggage, "cabinLuggage", "cabin");
    }
    if (personalLuggage) {
      generateLuggage(personalLuggage, "personalLuggage", "personal");
    }
    if (purseLuggage) {
      generateLuggage(purseLuggage, "purseLuggage", "purse");
    }
    if (petCarrier) {
      generateLuggage(petCarrier, "petCarrier", "pet");
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

function addLuggage(addLuggage, luggageType) {
  const listsContainer = document.getElementById("lists");
  const luggage = localStorage.getItem(addLuggage);
  const checkLuggageCategories = JSON.parse(luggage);
  const lowerCaseLuggageType = luggageType.toLowerCase();
  const luggageCard = listTemplate(luggageType);

  if (!luggage || (checkLuggageCategories.clothes.length === 0 && checkLuggageCategories.electronics.length === 0 && checkLuggageCategories.mischellaneous.length === 0 && checkLuggageCategories.footwear.length === 0 && checkLuggageCategories.toiletries.length === 0 && checkLuggageCategories.personalitems.length === 0)) {
    console.log("running no luggage");
    generateIds();
    initializeStorage(lowerCaseLuggageType);
    const startLuggage = localStorage.getItem(addLuggage);
    const parsedLuggage = JSON.parse(startLuggage);
    for (const [key, value] of Object.entries(parsedLuggage)) {
      listGroupTemplate(luggageType, key, value, luggageCard);
    }
    const cardFooter = newItemFooterTemplate(lowerCaseLuggageType);
    luggageCard.appendChild(cardFooter);
    listsContainer.appendChild(luggageCard);
  } else {
    console.log("luggage already added");
  }
}

async function addNewLuggages(luggageType) {
  console.log("running addLuggage");

  // const listsContainer = document.getElementById("lists");
  // const luggageCard = listTemplate(luggageType);
  const lowerCaseLuggageType = luggageType.toLowerCase();

  // add the other luggage types here as well
  if (lowerCaseLuggageType.includes("main")) {
    addLuggage("mainLuggage", luggageType);
  }
  if (lowerCaseLuggageType.includes("cabin")) {
    addLuggage("cabinLuggage", luggageType);
  }
  if (lowerCaseLuggageType.includes("purse")) {
    addLuggage("purseLuggage", luggageType);
  }
  if (lowerCaseLuggageType.includes("personal")) {
    addLuggage("personalLuggage", luggageType);
  }
  if (lowerCaseLuggageType.includes("pet")) {
    addLuggage("petCarrier", luggageType);
  }

  // const cardFooter = newItemFooterTemplate(lowerCaseLuggageType);
  // luggageCard.appendChild(cardFooter);
  // listsContainer.appendChild(luggageCard);

  // location.reload();
}
