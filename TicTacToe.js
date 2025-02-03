
class TicTacToe{
    /**
     * The constructor creates a 4x4 array representing the Tic-Tac-Toe board with all cells set to null
     * Each cell may be change to 'X' or 'O' to represent a player's move
     */
    constructor() {
        this.board = Array(4).fill(null).map(() => Array(4).fill(null)); 
    }

    /**
     * Checks if there is a winning condition (vertical, horizontal, diagonal, four corners or 2x2 box)
     * @param {Array<Array<string|null>>} board - A 4x4 array representing the Tic-Tac-Toe board
     * @returns {boolean} - Returns true if there is a winning condition, otherwise false
     */
    checkWin(board){
        // Horizontal
        for(let i = 0; i < 4; i++){
            if(board[i].every(cell => cell === 'X') || board[i].every(cell => cell === 'O')) return true;
        }
        // Vertical
        for(let col = 0; col < 4; col++){
            if(board.every(row => row[col] === 'X') || board.every(row => row[col] === 'O')) return true;
        }
        
        // Diagonals
        for(let i = 0; i < 4; i++){
            // Top left to bottom right
            if(board.every((row, col)=> row[col] === 'X') || board.every((row, col)=> row[col] === 'O')) return true;
            // Bottom left to top right
            if(board.every((row, col)=> row[3 - col] === 'X') || board.every((row, col)=> row[3 - col] === 'O')) return true;
        }

        // Four corners
        if(board[0][0] === board[0][3] && board[0][0] === board[3][0] && board[0][0] === board[3][3] && board[0][0] !== null) return true;

        // 2x2 box
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(
                    board[i][j] === board[i][j+1] &&
                    board[i][j] === board[i+1][j] &&
                    board[i][j] === board[i+1][j+1] &&
                    board[i][j] !== null
                ) return true;
            }
        }

        // Otherwise, no winning condition
        return false;

    }

    /**
     * Checks if there are any moves left on the board
     * @param {Array<Array<string|null>>} board - A 4x4 array representing the Tic-Tac-Toe board
     * @returns {boolean} - Returns true if there are empty spaces left AND the game hasn't been won, otherwise false
     */
    anyMovesLeft(board){
        return !this.checkWin(board) && board.some(cell => cell.includes(null))
    }

    /**
     * Checks if the game is over
     * @param {Array<Array<string|null>>} board - A 4x4 array representing the Tic-Tac-Toe board
     * @returns {boolean} - Returns true if there is a winning condition or if there's no moves left, otherwise false
     */
    isGameOver(board){
        // If there's a winning condition, anyMovesLeft will return false as seen on line 60
        return !this.anyMovesLeft(board);
    }
}

module.exports = TicTacToe;