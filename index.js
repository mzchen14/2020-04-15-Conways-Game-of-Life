const { ROW_SIZE, COL_SIZE } = require("./constants");
const {calculateNewWorldState} = require('./CalculateNewWorldState')
const {times} = require('./utils')

//The World
const world = initWorld(OFF);

//Start
console.log(world)
world = tick(world)
console.log(world)

function initWorld(valueToSet=0) {
    times(ROW_SIZE, row => {
        world[row] = [];

        times(COL_SIZE, col => {
            world[row][col] = valueToSet;
        })
    })
    return world;
}

