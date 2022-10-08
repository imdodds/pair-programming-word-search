const wordSearch = (letters, word) => { 

    const transpose = (matrix) => {
        const result = [];
        for (let column = 0; column < matrix[0].length; column++) {
            result.push([]);
            for (let row = 0; row < matrix.length; row++) {
                result[column].push(matrix[row][column]);
            }
        }
        return result;
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    
    if (!letters || !word) {
        return false;
    }

    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;

};

module.exports = wordSearch