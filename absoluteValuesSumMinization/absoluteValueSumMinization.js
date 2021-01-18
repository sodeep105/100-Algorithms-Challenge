function absoluteValueSumMinization(numbers) {
    numbers.sort();
    numbers.length % 2 == 0;
    var median = 0;
    if (numbers.length % 2 == 0) {
        median = numbers[ numbers.length/2 - 1];
    } else {
        median = (numbers[ Math.floor(numbers.length/2)]);
    }

    console.log(median);

}
absoluteValueSumMinization([3,4,5,6]);
