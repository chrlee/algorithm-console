function algorithmMetadata(bigO, bigTheta, desc, algo) {
    this.bigO = bigO;
    this.bigTheta = bigTheta;
    this.desc = desc;
    this.algo = algo;
}

import { bubbleSort } from "./sortingAlgorithms.js";

export const bubbleSortMetadata = new algorithmMetadata("n^2", "n", "Test Test Test", bubbleSort);
