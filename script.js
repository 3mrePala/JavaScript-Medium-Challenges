// function calcTime(seconds) {
//   let  timerMinutes = Math.floor(seconds / 60);
//   let timerSeconds = seconds % 60;

//   if (timerMinutes.toString().length === 1) {
//   timerMinutes = "0" + timerMinutes
//   }
//   return timerMinutes + ":" + timerSeconds
// }

// console.log(calcTime(190));

// function filterOutFalsy(arr){
// return arr.filter(elem => !!elem === true)
// }
// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));

// function filterOutFalsy(arr){
//     let truthyArr = [];
// for (i = 0; i < arr.length; ++i)
// if (!!arr[i] === true) {
// truthyArr.push(arr[i])
// }
// return truthyArr
// }

// console.log(filterOutFalsy(['', 'banana', "0", NaN, 0, 500]))

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", ""]));
