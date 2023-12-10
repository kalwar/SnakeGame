/* CANVAS_SIZE is an array that contains the width and height of the canvas element, which is used to draw graphics on the web page. The canvas size is 800 by 800 pixels.*/
const CANVAS_SIZE = [800, 800];

/* SNAKE_START is an array that contains the initial coordinates of the snake's body segments. The snake is composed of two squares, one at (8, 7) and one at (8, 8).*/
const SNAKE_START = [
  [8, 7],
  [8, 8]
];

/* APPLE_START is an array that contains the initial coordinates of the apple, which is the food that the snake has to eat. The apple is located at (8, 3) */
const APPLE_START = [8, 3];

/* SCALE is a number that represents the size of each square on the grid. The scale is 40 pixels, which means that each square is 40 by 40 pixels. */
const SCALE = 40;

/* SPEED is a number that represents the speed of the snake's movement. The speed is 100 milliseconds, which means that the snake moves one square every 0.1 seconds. */
const SPEED = 100;

/* DIRECTIONS is an object that maps the key codes of the arrow keys to the corresponding direction vectors. The direction vector is an array that contains the horizontal and vertical components of the movement. For example, the up arrow key has the code 38 and the direction vector [0, -1], which means that pressing the up arrow key will move the snake one square up. */

const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};
