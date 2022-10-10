import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);  // call parent's initialiser
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this); // find location of the piece
        const delta = this.player === Player.WHITE ? 1 : -1; // determining position/movement of player. White 1, black -1.
        
        const singleMoveSquare = Square.at(location.row + delta, location.col); 
        const doubleMoveSquare = Square.at(location.row + 2 * delta, location.col);

        if (this.hasMoved) {
            return [singleMoveSquare];    // if already moved, only does single move. Checked via hasMoved in piece.
        } else {
            return [singleMoveSquare, doubleMoveSquare];
        }
    }
}