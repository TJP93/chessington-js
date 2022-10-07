import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return new Array(0);
    }





    /*movePawn(board, newSquare) {
        let pawnSquare = currentSquare[row+1][col]
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
    */
    movePawn(board) {
        if (this.Player === WHITE) {
        let pawnSquare = [currentSquare[row+1][col]]
        this.moveTo(board, pawnSquare)
        }
        else {let pawnSquare = [currentSquare[row-1][col]]
        this.moveTo(board, pawnSquare)
        }
    }
}

