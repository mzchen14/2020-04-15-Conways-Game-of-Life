const { ROW_SIZE, COL_SIZE, ON } = require("./constants");
const {times} = require('./utils')

function calculateNewWorldState(oldWorld) {
    const newWorld = initWorld(null);
    const rules = [
        // //rule 1: turn everything on:
        // (row, col) => {
        //     world[row][col] = ON;
        // }

        //rule 1
        (row, col) => {
            const currState = oldWorld[row][col]
            //don't work with dead cells
            if(currState = OFF) {
                return;
            }
            const numberOfNeighbors = getNumberOfNeighbors(oldWorld, row, col);
            if(numberOfNeighbors === 2 || numberOfNeighbors === 3 ) {
                newWorld[row][col] = ON;
            }
        },

        (row, col) => {
            //any dead cell with three neighbors becomes alive
            const currState = world[row][col]
            //don't work with live cells
            if(currState = ON) {
                return;
            }
            const numberOfNeighbors = getNumberOfNeighbors(oldWorld, row, col);
            if(numberOfNeighbors === 3) {
                newWorld[row][col] = ON;
            }

        }
    ];

    //process rules
    times(ROW_SIZE, row => {
        times(COL_SIZE, col => {
            rules.forEach(rule => rules(row, col))
        })
    for(var i = 0; i < ROW_SIZE; i++) {
        for(var i = 0; i < COL_SIZE; i++) {
            const newValue = newWorld[row][col]
        
        if (newValue === null) {
            newWorld[row][col] = oldWorld[row][col]
        }
    }
    }
    return newWorld;
}

exports.calculateNewWorldState = calculateNewWorldState;