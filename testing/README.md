# Testing

As we mentioned before, reading and understanding errors is an important part of your journey to becoming a better programmer. However, sometimes our code might run without a syntax or runtime error, but still not produce the expected result. Check out the following code:

```js
function sumNumbers(a, b){
    return null;
}

sumNumbers(1, 2); // null
```

Sure, it runs without errors. But does it "work"? I'd expect a function called `sumNumbers` to return the two numbers added together, not `null`.

In cases like these, we can help ourselves by using an automated test suite. Developers write automated tests to assert that their code is working the way they expect it to. If anything changes and the code doesn't do what was expected, the test suite will raise an error. For this exercise, you can use the existing test suite to fix some bugs left behind in our code. 

## Instructions

Run the test suite by running `npx jest app.test.js`. Fix the defined functions so that all of the tests pass. 