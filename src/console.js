import { bubbleSortMetadata } from "./metadata.js";
import { isSorted } from "./sortingAlgorithms.js";

const content = window.document.createElement("div");

const testCaseButton = document.createElement("button");
testCaseButton.innerHTML = "Create Test Case"

const text = window.document.createElement("p");
let testCase = [];
testCaseButton.addEventListener("click", () => {
    testCase = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
    const node = document.createTextNode(testCase.join(' '));
    text.replaceChildren(node);
});

const sortButton = document.createElement("button");
sortButton.innerHTML = "Sort";
sortButton.addEventListener("click", () => { 
    bubbleSortMetadata.algo(testCase);
    const node = document.createTextNode(testCase.join(' '));
    text.replaceChildren(node);
    const isSortedNode = document.createTextNode(isSorted(testCase));
    text.appendChild(document.createElement("br"));
    text.appendChild(isSortedNode);
});


const body = window.document.body;

content.appendChild(testCaseButton);
content.appendChild(text);
content.appendChild(sortButton);

body.appendChild(content);