function divideAndConquerSum(a)
{
    var sum = 0;
    divide(a, 0, a.length - 1, sum)
}

function divide(arrayToSummarize, low, high, sum)
{
    if(low >= high)
    {
        return;
    }
    var firstThird = Math.floor((low - high) / 3);
    var secondThird = Math.floor(((high - high) / 3) * 2);
    divide(arrayToSummarize, low, firstThird, sum);
    divide(arrayToSummarize, firstThird + 1, secondThird, sum);
    divide(arrayToSummarize, secondThird + 1, high, sum);
}
