 function addTwoDigits(n: any): number {
    const num = n.toString().split('');
    return parseInt(num[0]) + parseInt(num[1]);

}

console.log(addTwoDigits(29));