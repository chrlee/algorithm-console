function algorithmMetadata(name, bigO, bigOmega, desc, algo) {
    this.name = name;
    this.desc = desc;
    this.bigO = bigO;
    this.bigOmega = bigOmega;
    this.algo = algo;
}

const descriptions = {
    selectionSort: "A simple sorting algorithm that works by finding the minimum value in the array at every iteration and placing it in the beginning. Doesn't work well in many cases.",
    bubbleSort: "A simple sorting algorithm that works by repeatedly swapping adjacent elements to check if they're in order. Only works well on extremely small or nearly sorted datasets.",
    insertionSort: "A simple sorting algorithm that places each element in its respective index at every iteration. Only works well on extremely small or nearly sorted datasets.",
    mergeSort: "A Divide-and-Conquer based algorithm that splits the array into halves and then merges the halves back upward to sort. Merge sort's main benefit is that it is a stable sort."
}

import * as SortingAlgorithms from "./sortingAlgorithms.js";

export const selectionSortMetadata = new algorithmMetadata("Selection Sort", "n^2", "n^2", descriptions.selectionSort, SortingAlgorithms.selectionSort)
export const bubbleSortMetadata = new algorithmMetadata("Bubble Sort", "n^2", "n", descriptions.bubbleSort, SortingAlgorithms.bubbleSort);
export const insertionSortMetadata = new algorithmMetadata("Insertion Sort", "n^2", "n", descriptions.insertionSort, SortingAlgorithms.insertionSort);
export const mergeSortMetadata = new algorithmMetadata("Merge Sort", "nlog(n)", "nlog(n)", descriptions.mergeSort, SortingAlgorithms.mergeSort);

