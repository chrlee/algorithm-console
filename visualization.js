import { bubbleSortMetadata } from "./metadata.js";

const text = window.document.createElement("p");
const node = window.document.createTextNode(bubbleSortMetadata.desc);
const newDiv = window.document.createElement("div");
text.appendChild(node);
newDiv.appendChild(text);

const body = window.document.body;
body.appendChild(newDiv);