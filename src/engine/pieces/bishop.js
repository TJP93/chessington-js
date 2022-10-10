import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);

        const bishopMovement = []; // need to be able to move diagonally in all 4 directions. NE, SE, SW, NW. Both col and row increasing/decreasing simultaneously. Nested for loop?

        for (let row = location.row + 1; row < 8; row++) {
            for (let col = location.col + 1; col < 8; col++) {
                let destination = new Square(row, col);                             // moving NE
                bishopMovement.push(destination);
            }
        }

        for (let row = location.row + 1; row < 8; row++) {
            for (let col = location.col - 1; col > -1; col--) {
                let destination = new Square(row, col);                             // moving SE
                bishopMovement.push(destination);
            }
        }

        for (let row = location.row - 1; row > -1; row--) {
            for (let col = location.col - 1; col > -1; col--) {
                let destination = new Square(row, col);                             // moving SW
                bishopMovement.push(destination);
            }
        }

        for (let row = location.row - 1; row > -1; row--) {
            for (let col = location.col + 1; col < 8; col++) {
                let destination = new Square(row, col);                             // moving NW
                bishopMovement.push(destination);
            }
        }


        return bishopMovement;
    }
}
