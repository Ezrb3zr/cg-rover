This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview
    
A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

## Input

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be (0, 0).

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation.

NOTE: IT IS IMPORTANT THAT THE MAP SIZE AND THE STARTING POSITION HAVE THEIR VALUES SEPARATED BY A SPACE. IT IS EQUALLY IMPORTANT THAT THE MOVEMENT INPUT HAS NO DELIMITERS BETWEEN KEYS.

Test Input:
    
    5 5
    1 2 N
    LMLMLMLMM
    3 3 E
    MMRMMRMRRM
    1 1 N
    MMMMMMMMMM

## Output
You should get a list of resulting Coordinates, wherever each rover lands.

HOWEVER it should be stated that when a rover goes outside the map, my code returns the last known position at the time of the crash. So if there are 10 movements for a rover, and on the 5th move it crashes, you will see the resulting coordinate at the time of the crash. The rover will not move after the 5th move. For the sake of simplicity, I do not keep track of which move it was that cause the crash.

Example Output:

    (1 2 N)
    (5 1 E)
    (1 6 N) Oh no! The Rover fell off the edge of the plateau at some point! 😦

## Available Scripts

In the project directory, you can run:

### `npm start`

This is what I use for the most part. Please run <b> npm install </b>
before running the app.



Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
