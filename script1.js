   
//    given an array of elements, return the same length array filled with 0's
//    for example; ([5, 100, 0]) --> [0,0,0]

function zero(arr){
    for (let i = 0; i < arr.length; i++){
         arr[i] = 0                                                                                                                                                                                          
    }                                                                                                                                                                                                                                                                                                
    return arr       
}
console.log(zero([1, 2, 3, 4, 5]))