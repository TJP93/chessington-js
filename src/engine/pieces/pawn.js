import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return new Array(0);
    }

    function(movePawn) {
    const currentSquare = board.findPiece(this);
    const colour = this.player;
    let moves = new Array();
    
    if (colour === player.WHITE) {

    let targetRow = currentSquare.row;
    targetRow++;
    let targetColumn = currentSquare.col;

    let position = new Square(targetRow, targetColumn)

    moves.push(position);
    }
}


}

