function algorithmMetadata(name, bigO, bigOmega, desc, algo) {
    this.name = name;
    this.desc = desc;
    this.bigO = bigO;
    this.bigOmega = bigOmega;
    this.algo = algo;
}

const descriptions = {
    bubbleSort: "The simplest sorting algorithm. Works by repeatedly swapping adjacent elements to check if they're in order. Only works well on extremely small or nearly sorted datasets.",
    insertionSort: "A simple sorting algorithm that places each element in its respective index at every iteration. Only works well on extremely small or nearly sorted datasets.",
}

import { bubbleSort, insertionSort } from "./sortingAlgorithms.js";

export const bubbleSortMetadata = new algorithmMetadata("Bubble Sort", "n^2", "n", descriptions.bubbleSort, bubbleSort);
export const insertionSortMetadata = new algorithmMetadata("Insertion Sort", "n^2", "n", descriptions.insertionSort, insertionSort);

