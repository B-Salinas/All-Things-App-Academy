# Guided Project - Creating Local Files and Running them

For this portion of the assessment we'll be working in VS Code to create new folders and JavaScript files and then testing those files by running them using Node.

## Phase 1: Creating files and Folders
Start by creating a folder that will contain all the code you'll write for this assessment - name this folder your first name then an underscore followed by your last name (i.e. if your name is "Jasmine Smith" your folder would be named "Jasmine_Smith"). Within the folder you just created create a new folder named `assessment-files`. Open the `assessment-files` folder within VS Code.

Within the `assessment-files` folder create a new file named `phaseOne.js`. Next create one more file within the `assessment-files` folder named `phaseTwo.js`.

Your file structure should look like this:

```
<!-- Assuming the person taking this test is Jasmine Smith -->
Jasmine_Smith
    └── assessment-files
        ├── phaseOne.js
        └── phaseTwo.js
```

## Phase 2: Using Node to run JavaScript files
For the next part of the assessment we will be writing a few simple lines of code in each `.js` file we previously created and then using Node to run that code.

**Do the following:**
1. In the `phaseOne.js` file insert a `console.log` statement that will print "hello world" when the code inside the file is run.
2. In the `phaseTwo.js` write a function named `addTwo` that will accept a number as an argument and then will `return` the number with `2` added to it.
  - Underneath the `addTwo` function `console.log` the result of invoking `addTwo` passing in the number `5` as an argument.
  
Save your work in each `.js` file. Next, open a window of the Terminal application on your computer and navigate to the `assessment-files` directory. Once inside the directory run the code your wrote within the `phaseOne.js` file using Node to ensure your code runs properly. You should see "hello world" printed to your terminal after running the file using Node.

Finally, use Node to test the `addTwo` function you wrote in your `phaseTwo.js` file. Ensure that you `console.log` the invoking of your `addTwo` function passing in 5 as an argument. Running the `phaseTwo.js` file using Node you should see `7` printed to your terminal screen.

Great job! Now zip up (also called compressing) the outermost folder you created (the one with your name). Following our previous example you would have a `Jasmine_Smith.zip` folder containing all of your work. Submit this folder and you will be done with this portion of the assessment. If at any point you need help don't be afraid to ask a TA.
