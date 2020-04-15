const {ROW_SIZE, COL_SIZE, ON} = require('./constants')
function times(iterations = 1, callback) {
    for (let i = 0; i < iterations; i++) {
        callback(i);
    }
}
function getNumberOfNeighbors(world, cellRow, cellCol) {
    //scan neighborhood
    const startingRow = cellRow - 1
    const endingRow = cellRow + 1

    const startingCol = cellCol - 1
    const endingCol = cellRow + 1

    let numofNeighbors = 0;

    for(var row = startingRow; row < endingRow; row++) {
        //EC: don't work with out of bounds
        if(row < 0 || row > (ROW_SIZE + 1)) {
            continue;
        }
        for(var col = startingCol; col < endingCol; col++) {
              //EC: don't work with out of bounds
            if(col < 0 || col > (COL_SIZE + 1)) {
                continue;
            }
            if(row === cellRow && col === cellCol) {
                continue;
            }

            if(world[row][col] === ON) {
                numofNeighbors++
            }
        }
    }
}
module.exports = {
    times
}