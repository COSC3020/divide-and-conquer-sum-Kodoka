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
        // Calculate what one third of the length of the current region is.
        var regionLength = high - low + 1;
        var oneThird = Math.floor(regionLength / 3);

        // If oneThird is 0, the region can't be split into three sub arrays, instead recursively sum the current array
        // as two sub arrays.
        if(oneThird === 0)
        {
            var mid = Math.floor((low + high) / 2);
            return divideArray(arrayToSummarize, low, mid) +
                divideArray(arrayToSummarize, mid + 1, high);
        }

        // Recursively sum the current array as three sub arrays.
        var firstThird = low + oneThird - 1;
        var secondThird = low + 2 * oneThird - 1;
        return divideArray(arrayToSummarize, low, firstThird) +
            divideArray(arrayToSummarize, firstThird + 1, secondThird) +
            divideArray(arrayToSummarize, secondThird + 1, high);
    }
}