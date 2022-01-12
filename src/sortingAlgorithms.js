const swap = (arr, i, j) => {
    let k;
    k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
};

function sleep(time) {
    return new Promise((resolve) => { 
        setTimeout(resolve, time);
    });
}

export function isSorted(arr){
    if(arr.length < 2) return true;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]) return false;
    }
    return true;
}

export async function selectionSort(arr, animationCallback = () => {}){
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
            await sleep(0).then(animationCallback);
        }
        swap(arr, i, min);
    }
    return arr;
}

export async function bubbleSort(arr, animationCallback = () => {}){
    for(let i = arr.length-1; i >= 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
            await sleep(0).then(animationCallback);
        }
    }
    return arr;
}

export async function insertionSort(arr, animationCallback = () => {}){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; arr[j] < arr[j-1]; j--){
            swap(arr, j, j-1);
            await sleep(0).then(animationCallback);
        }
    }
    return arr;
}

export async function mergeSort(arr, animationCallback = () => {}){
    const sort = async (array) => {
        if(array.length < 2) return array;
        const middle = array.length / 2;
        const left = array.splice(0, middle);
        return await merge(await sort(left), await sort(array));
    }

    const merge = async (left, right) => {
        let array = []; 
        
        while(left.length && right.length){
            if(left[0] < right[0]){
                array.push(left.shift());
            } else{
                array.push(right.shift());
            }
            await sleep(0).then(animationCallback);
        }
        return [...array, ...left, ...right];
    }

    return sort(arr);
}