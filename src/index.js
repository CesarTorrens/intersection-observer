/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { observer } from "./lazy";
let min = 1;
let max = 123;

const registerImage = (image) => {
  observer.observe(image);
};
const getRamdonsFoxs = () => Math.floor(Math.random() * (max - min)) + min;

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";
  const numberFox = getRamdonsFoxs();
  const image = document.createElement("img");
  image.className = "mx-auto";
  image.dataset.src = `https://randomfox.ca/images/${numberFox}.jpg`;
  image.width = "300";
  image.alt = "imagen de zorro";
  container.appendChild(image);
  return container;
};

const newImage = createImageNode();

const mountNode = document.getElementById("container-foxs");
const addButton = document.querySelector("button");
const actionButton = () => {
  const image = createImageNode();
  mountNode.appendChild(image);

  registerImage(image);
};
addButton.addEventListener("click", actionButton);
