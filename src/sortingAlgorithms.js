const swap = (arr, i, j) => {
    let k;
    k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
};

export function isSorted(arr){
    if(arr.length < 2) return true;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]) return false;
    }
    return true;
}

export function bubbleSort(arr){
    for(let i = arr.length-1; i >= 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    }
    return arr;
}

export function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; arr[j] < arr[j-1]; j--){
            swap(arr, j, j-1);
        }
    }
    return arr;
}