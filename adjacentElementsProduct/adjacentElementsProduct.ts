 function adjacentElementsProduct(inputArray: number[]): number {
     let maxElement = inputArray[0]*inputArray[1];
     for(let i=1; i<inputArray.length-1; i++){
         let prod = inputArray[i]*inputArray[i+1];
         if(maxElement<prod) {
             maxElement = prod;
         } 
     }
     return maxElement;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));