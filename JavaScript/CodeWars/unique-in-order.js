/* Implement the function unique_in_order which takes as argument a sequence and returns 
a list of items without any elements with the same value next to each other and preserving 
the original order of elements. */

// Example:

/*uniqueInOrder('AAAABBBCCDAABBB')  == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')            == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])          == [1,2,3] */

const uniqueInOrder = function(iterable) {
    let finalArr = [];
    let tempArr = [];
    // Here whe check if the passed in value is an array
    // If it's not, we call .split() to convert it to an array and assign to tempArr
    if (Array.isArray(iterable) === false) {
        tempArr = iterable.split('');
    } else {
        tempArr = iterable; // If it is an array, we assign it to tempArr
    }
    // Iterate through tempArr
    for (i = 0; i < tempArr.length; i++) {
        if (tempArr[i] != tempArr[i - 1]) { // Check if [i] is equal to previous item
            finalArr.push(tempArr[i]); // if not, push the item to the new array
        }
    }
    return finalArr; // return new array with unique values in original order.
}

// This can be a string or an array.
// So first we need to check if it is an array.
// If it is not an array, we need to convert the string into one