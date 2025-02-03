/*
  This is a collection of unit tests that will test checkWin, anyMovesLeft, and isGameOver. You can run them with 'npm test'. 
  */
  const TicTacToe = require('./TicTacToe');
  
  describe("TicTacToe Class", () => {
    let game;

    beforeEach(() => {
        game = new TicTacToe();
    });

    // Empty board tests
    test('Empty board: should initialize an empty 4x4 board', () => {
        expect(game.board.length).toBe(4);
        expect(game.board.every(row => row.length === 4)).toBe(true);
        expect(game.board.flat().every(cell => cell === null)).toBe(true);
    });
    test("Empty board: checkWin should return false", () => {
        expect(game.checkWin(game.board)).toBe(false);
    });
    test("Empty board: anyMovesLeft should return true", () => {
        expect(game.anyMovesLeft(game.board)).toBe(true);
    });
    test("Empty board: isGameOver should return false", () => {
        expect(game.isGameOver(game.board)).toBe(false);
    });

    // Winning conditions
    test("Winning conditions: checkWin/isGameOver should return true with horizontal win", () => {
        game.board[1] = ['O', 'O', 'O', 'O'];
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);
    });
    test("Winning conditions: checkWin/isGameOver should return true with vertical win", () => {
        for (let i = 0; i < 4; i++) {
            game.board[i][2] = 'X';
        }
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);
    });
    test("Winning conditions: checkWin/isGameOver should return true with diagonal win (\\)", () => {
        for (let i = 0; i < 4; i++) {
            game.board[i][i] = 'O';
        }
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);

    });
    test("Winning conditions: checkWin/isGameOver should return true with diagonal win (/)", () => {
        for (let i = 0; i < 4; i++) {
            game.board[i][3 - i] = 'X';
        }
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);

    });
    test("Winning conditions: checkWin/isGameOver should return true with four corners win", () => {
        game.board[0][0] = 'O';
        game.board[0][3] = 'O';
        game.board[3][0] = 'O';
        game.board[3][3] = 'O';
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);
    });
    test("Winning conditions: checkWin/isGameOver should return true with 2x2 box win", () => {
        game.board[1][1] = 'O';
        game.board[1][2] = 'O';
        game.board[2][1] = 'O';
        game.board[2][2] = 'O';
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);
    });
    test("Winning conditions: checkWin/isGameOver should return true with multiple winning conditions", () => {
        game.board= [
            ['X', 'O', 'X', 'O'],
            ['O', 'O', 'O', 'O'],
            ['X', 'X', 'X', 'O'],
            ['X', 'X', 'O', 'X']
        ]
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);
    });
    test("Winning conditions: anyMovesLeft should return false if the game has been won", () => {
        game.board[1] = ['O', 'O', 'O', 'O'];
        expect(game.anyMovesLeft(game.board)).toBe(false);
        expect(game.checkWin(game.board)).toBe(true);
        expect(game.isGameOver(game.board)).toBe(true);
    });

    // No moves left
    test("Full board: anyMovesLeft should return false", () => {
        game.board = game.board.map(row => row.map(() => 'X'));
        expect(game.anyMovesLeft(game.board)).toBe(false);
    });
    test("Full board: isGameOver should return true", () => {
        game.board = game.board.map(row => row.map(() => 'X'));
        expect(game.isGameOver(game.board)).toBe(true);
    });

    // Incomplete games
    test("Incomplete game: checkWin/isGameOver should return false", () => {
        game.board= [
            ['X', 'O', 'X', 'O'],
            ['O', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'O'],
            [null, 'X', 'O', 'X']
        ]
        expect(game.checkWin(game.board)).toBe(false);
        expect(game.isGameOver(game.board)).toBe(false);
    });
    test("Incomplete game: anyMovesLeft should return true", () => {
        game.board= [
            ['X', 'O', 'X', 'O'],
            ['O', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'O'],
            [null, 'X', 'O', 'X']
        ]
        expect(game.anyMovesLeft(game.board)).toBe(true);
    });
});