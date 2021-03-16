/*
  Linear Search
 */




// === Linear Search ===
// const arraySet = [2,4,7,10,67,32,50,62];

// function getIndexOfItem(set, item) { 
//   //loop through each value in set
//     for (let i=0; i<set.length; i++) {
//       // if item found, return index of item
//       if(set[i] === item) {
//         return i;
//       }
//     }

//     //if item does not exist in set, return -1
//     return -1;
// }

// console.log(getIndexOfItem(arraySet, 67)); // 4
// console.log(getIndexOfItem(arraySet, 68)); // -1

/*
// === Min VS Max ===
function getMinAndMax(arraySet) {
    // For the array index num., PY use (), BUT JS use [].
  // have a variable to record min value
  // let min = arraySet[0]
  // have a variable to record max value
  // let max = arraySet[0]
  let min, max = arraySet[0]

  // loop through the array
  for (let i=1; i<arraySet.length; i++){
    // check  min & max varible against the value in array for this iteration
    // if(arraySet[i]<min) {
    if(min > arraySet[i]) {
      min = arraySet[i]
    }

    // if(arraySet[i]>max) {
    if(max < arraySet[i]) {
      max = arraySet[i]
    }
  }
    

// Use ES^ format
    console.log(`min: ${min}, Max: ${max}`)
}

getMinAndMax([1,2,3,4,0,-5,-9]); // Min: -9, Max: 4
getMinAndMax([56,78,0,1,99,-99]); // Min: -99, Max: 99

*/

/* 
// === getMinAndMaxSum ===
function getMinAndMaxSum(arraySet) {
  // let min, max = arraySet[0], arraySet[0];   // WRONG syntax
  // let min, max = arraySet[0]   // the second var didn't assign with a value
  let min = arraySet[0];
  let max = arraySet[0];

  let totalSum = 0;

  for(let i=0; i<arraySet.length; i++) {
    if(arraySet[i]<min) {
      min=arraySet[i];
    }else if(arraySet[i]>max) {
      max=arraySet[i];
    }

    totalSum += arraySet[i];
  }

  console.log(`Min Sum: ${totalSum-max}, Max Sum: ${totalSum-min} `)
}

getMinAndMaxSum([1,2,3,4,5]); // Min Sum: 10, Max Sum: 14 */

/*
[2,3,4,5] => 14
[1,2,3,4] => 10
[1,3,4,5] => 13
[1,2,3,5] => 11
[1,2,3,4] => 10
*/