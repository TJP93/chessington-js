import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this); // find location of the piece

        const rookMovement = [];

        for (let row = location.row + 1; row < 8; row++ ) {
            let destination = new Square(row, location.col)   // moving up
            rookMovement.push(destination);
        }

        for (let row = location.row - 1; row > -1; row--) {
            let destination = new Square(row, location.col)  // moving down
            rookMovement.push(destination);
        }

        for (let col = location.col + 1; col < 8; col++) {
            let destination = new Square(location.row, col)  // moving right
            rookMovement.push(destination);
        }

        for (let col = location.col - 1; col > - 1; col--) {
            let destination = new Square(location.row, col)  // moving left
            rookMovement.push(destination);
        }
        return rookMovement;
    }
}
