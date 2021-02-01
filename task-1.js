// Implement the getMin() function, which takes an array of numbers arr
// and returns the smallest number of the array. To solve the problem,
// you must use one of the methods to specify the context of this. It is 
// forbidden to use any cycle.

function getMin(arr){
    return Math.min(...arr);
}

//has to be:
// function getMin(arr){
//     return Math.min.apply(null, arr);
// }

console.log(getMin([7, 5, 6, 7, 8, 99, 113]));