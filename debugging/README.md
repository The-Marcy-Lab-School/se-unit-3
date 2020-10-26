# Debugging

Being able to debug errors is one of the most important skills you'll build as a programmer. Most of the time during your work, your code will have bugs in it. That's a good thing - if you didn't have any bugs, you wouldn't have any work to do! 

Your task: another developer wrote an application to build a lottery application. The app picks a random number between 1 and 100 and sends the message to the browser via an alert. Unfortunately, the program contains many bugs. The developer who wrote it actually won the lottery, moved to Maui, and stopped returning your calls. You'll need to use your debugging skills to fix the program!

 This lesson will focus on your ability to read error messages. You'll be starting with some broken code, and through your debugging process will eventaully turn it into working code! Follow the prompt below. 


1. Open `index.html` and look in the console in your developer tools. What is the error message that you see? 

2. What line number does the error message point to? 

3. Looking at that line number, what do you think the problem is? What's the simplest way you can fix this error? 

4. Make the change you suggested in line number three. Re-run the file by refreshing the `index.html` page. 

Repeat steps 1-4 until your program works as intended!


### SOLUTION

1. `Uncaught SyntaxError: Unexpected end of input`
2. Line 20
3. Add a closing bracket to the `if` statement that was missing. 

1. Uncaught ReferenceError: Cannot access 'getRandomNumber' before initialization
2. Line 4
3. Move the definition of `getRandomNumber` to before `runApp` is called

1. Uncaught ReferenceError: Cannot access 'getMessage' before initialization
2. Line 9
3. Move the definition of `getMessage` to before `runApp` is called

1. Uncaught TypeError: Math.rand is not a function
2. Line 4
3. There isn't a `Math.rand` function. A quick google search confirms it should be `Math.random`. 

1. Uncaught TypeError: Math.flour is not a function
2. Line 4
3. There isn't a `Math.flour` function. A quick google search confirms it should be `Math.floor`. 
