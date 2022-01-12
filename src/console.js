import * as SortAlgoMetadata from "./metadata.js";
import { isSorted } from "./sortingAlgorithms.js";

const content = window.document.createElement("div");

const testCaseButton = document.createElement("button");
testCaseButton.innerHTML = "Generate New Test Case"

const shuffle = (arr) => {
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }

    return arr;
}

const shuffleButton = document.createElement("button");
shuffleButton.innerHTML = "Shuffle";
shuffleButton.addEventListener("click", () => { 
    testCase = shuffle(testCase);
    const node = document.createTextNode(testCase.join(' '));
    text.replaceChildren(node);
});

const text = window.document.createElement("p");
let testCase = [];
testCaseButton.addEventListener("click", () => {
    testCase = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
    const node = document.createTextNode(testCase.join(' '));
    text.replaceChildren(node);
});

content.appendChild(testCaseButton);
content.appendChild(shuffleButton);
content.appendChild(text);

const algorithms = Object.keys(SortAlgoMetadata);
for(let algorithm of algorithms){
    const container = window.document.createElement("div");
    const algoName = window.document.createElement("h2");
    algoName.appendChild(document.createTextNode(SortAlgoMetadata[algorithm].name));

    const bigO = document.createElement("span");
    const bigOTitle = document.createElement("strong");
    bigOTitle.appendChild(document.createTextNode("Worst Case Runtime: "));

    bigO.appendChild(bigOTitle);
    bigO.appendChild(document.createTextNode("O(" + SortAlgoMetadata[algorithm].bigO + ")"));
    bigO.appendChild(document.createElement("br"));

    const bigOmega = document.createElement("span");
    const bigOmegaTitle = document.createElement("strong");
    bigOmegaTitle.appendChild(document.createTextNode("Best Case Runtime: "));

    bigOmega.appendChild(bigOmegaTitle);
    bigOmega.appendChild(document.createTextNode("Ω(" + SortAlgoMetadata[algorithm].bigOmega + ")"));
    bigOmega.appendChild(document.createElement("br"));

    const desc = document.createElement("p");
    desc.appendChild(document.createTextNode(SortAlgoMetadata[algorithm].desc));

    const isSortedNode = document.createElement("p");

    const sort = () => {
        const start = performance.now();
        testCase = SortAlgoMetadata[algorithm].algo(testCase);
        const end = performance.now();
        const execTime = end - start;
        const node = document.createTextNode(testCase.join(' '));
        text.replaceChildren(node);
        
        isSortedNode.replaceChildren(document.createTextNode("Sorted? " + (isSorted(testCase) ? "✅" : "❌") + " in " + execTime + "ms."));
    }

    

    const sortButton = document.createElement("button");
    sortButton.innerHTML = "Sort";
    sortButton.addEventListener("click", () => { 
        sort();
    });



    container.appendChild(algoName);
    container.appendChild(bigO);
    container.appendChild(bigOmega);
    container.appendChild(desc);
    container.appendChild(sortButton);
    container.appendChild(isSortedNode);

    content.appendChild(container);
}

document.body.appendChild(content);