# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

For each itteration of my code, n/3, but as there are 3 subdivisions, we get
T(n)=3T(n/3), except when only 2 subdivision can be made, in which circumstance
we get T(n)=2T(n/2). Additionally my code does some checking/calculation each
itterations, adding O(1). Not accounting for constant factors, this gives a
final T(n)=T(n)∈θ(n)

## Resources
I used the following sources to help with my understanding of runtime, 'cause
I'm sort of dense, and this just doesn't resonate with me.

https://www.youtube.com/watch?v=BgLTDT03QtU
https://www.geeksforgeeks.org/complete-guide-on-complexity-analysis/

I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice.
