let results = [1.88974, 5.62845, 0.31437, 9.21103, 3.70935];

function testMean() {
    let list = results;
    let totalResults = 0;
    for (i=0; i < results.length; i++) {
        totalResults += results[i];
    }
    return totalResults / results.length;
}

let average = testMean();
let roundedAverage = Math.round(average * 100) / 100;
finalResult = "The average of the test results rounded to 2 decimal places is: " + roundedAverage;
console.log(finalResult);