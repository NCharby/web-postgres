// @flow

const testCase = [10, -1, 2, 5, 0, 6, 4, -5]

//merge sort
//O(nlogn)
function mergeSort(unsorted: Array<number>): Array<number>{

    if(unsorted.length <= 1){
        return unsorted // do nothing if 1 or less items
    }

    const middle = Math.floor(unsorted.length / 2 )

    const left = unsorted.slice(0, middle);
    const right = unsorted.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

const merge = (arr1, arr2) => {
    let sorted = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        else sorted.push(arr2.shift());
    };

    return sorted.concat(arr1.slice().concat(arr2.slice()));
};

// console.log(mergeSort(testCase))


//quick sort

const defaultComparator = (a: number, b: number): number => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

function quickSort(unsorted: Array<number>, comparator = defaultComparator): Array<number> {
    const sorted = [...unsorted]

    const recSort = (start, end) => {
        if(end - start < 1) {
            return
        }

        const pivot = sorted[end]
        let splitIndex = start
        for (let i = start; i < end; i++) {
            const sort = comparator(sorted[i], pivot)
            if(sort === -1){
                if(splitIndex !== i){
                    const temp = sorted[splitIndex]
                    sorted[splitIndex] = sorted[i]
                    sorted[i] = temp
                }
                splitIndex++
            }
            
        }

        sorted[end] = sorted[splitIndex]
        sorted[splitIndex] = pivot

        recSort(start, splitIndex -1)
        recSort(splitIndex + 1, end)

    }

    recSort(0, unsorted.length -1)
    return sorted
}

console.log(quickSort(testCase))