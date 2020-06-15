// @flow

const testString = "HELLO! This is a sentence to test against."

//String reverse

export function rev(text: string): string{
    const strArr = text.split('')
    return strArr.reverse().join('')
}

// console.log(rev(testString))


//Now reverse each word in place

export function wordRev(text: string): string {
    const wordArr = text.split(' ')
    return wordArr.reduce((acc:string , word: string): string => {
        return acc.concat(' ', rev(word))
    }, '')
}

// console.log(wordRev(testString))


//Create a function that takes an object and returns the keys and values as separate arrays.
/*
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
*/

const testObj = { a: "Apple", b: "Microsoft", c: "Google" }

export function keysAndValues(input: {[string]: any}): Array<Array<string>> {
    let keys = []
    let values = []
    for (const key in input) {
        if (input.hasOwnProperty(key)) {
            keys.push(key)
            values.push(input[key])
        }
    }
    return [keys.sort(), values.sort()]

}
//could also do this with Object.keys() and Object.values() but it's less efficiant

// console.log(keysAndValues(testObj))


// Array Flatten

const testArr = ['top1', 'top2', ['sub1', 'sub2'], 'top3', ['sub3', ['deep1', 'deep2']], null, [false]]

export function flattenArray(input: Array<any>): Array<any>{
    let holder = []
    input.forEach(item => {
        if(Array.isArray(item)){
            holder.push(...flattenArray(item))
        } else {
            holder.push(item)
        }
    });

    return holder
}

// console.log(flattenArray(testArr))

/*
Return the lowest index at which a value (second argument) should be inserted into an 
array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater 
than 1 (which has index 0), but less than 2 (which has index 1).

Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has 
been sorted it will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

const testInsertIndexArr = [1, 2, 3, 4, 5, 6]
const mixInsertIndexArr = [20, 2, 3, 4, 5, 6]

function getIndexToIns(collection: Array<number>, ins: number): number {
    const sorted = collection.sort((a,b)=>{return a - b})
    //loop through and find position
    let idx = 0
    while (idx < sorted.length -1) {
        if(sorted[idx] >= ins){
            break
        }
        idx++
    } //could also do this with reduce, but while() will stop at a hit

    return idx
}

// console.log(getIndexToIns(mixInsertIndexArr, 3))

