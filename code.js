// Delete when done testing.
var testArr = [1, 2, 3, 4, 5, 6];
console.log(divideAndConquerSum(testArr));

// Returns the sum of the elements of an array.
function divideAndConquerSum(a)
{
    return divideArray(a, 0, a.length - 1)
}

// Recursively divides an array down to a single element, then returns it.
function divideArray(arrayToSummarize, low, high)
{
    // If our low and high indices ever invert, just return, there's nothing to see in these forbidden regions.
    if(low > high)
    {
        return;
    }
    // If the region of the array we're looking at is a single element, the base case, then we'll return that element.
    else if(low === high)
    {
        return arrayToSummarize[low];
    }
    // Else, if the region is larger than a single element, we'll continue recursively calling on smaller regions.
    else if(low < high)
    {
        var mid = Math.floor((low + high) / 2);
        return divideArray(arrayToSummarize, low, mid) +
            divideArray(arrayToSummarize, mid + 1, high);
    }
}
