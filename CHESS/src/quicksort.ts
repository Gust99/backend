class Quicksort {
    static partition(array: number[], low: number, high: number): number {
        let pivot = array[high];

        let i = low - 1;

        for(let j = low; j < high; j++) {
            if(array[j] <= pivot) {
                i++;

                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }

        let aux = array[i + 1];
        array[i + 1] = array[high];
        array[high] = aux;

        return i + 1;
    }

    static sort(array: number[], low: number, high: number) {
        if(low < high) {
            let pi = Quicksort.partition(array, low, high);

            Quicksort.sort(array, low, pi - 1);

            Quicksort.sort(array, pi + 1, high);
        }
    }
}

import { performance } from 'perf_hooks';

let array = [10,9,8,7,6,5,4,3,2,1];
let n = array.length;

let startTime = performance.now();

Quicksort.sort(array, 0, n - 1);

let endTime = performance.now();

console.log(endTime - startTime, array.toString());