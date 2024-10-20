import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ChessGame() {
    const [game, setGame] = useState(new Chess());
    const [boardPosition, setBoardPosition] = useState(game.fen());

    const onDrop = (sourceSquare: string, targetSquare: string) => {
        try {

            console.log(`sourceSquare: ${sourceSquare}, targetSquare: ${targetSquare}`);

            const move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q' // for simplicity
            });

            if (move === null) {
                return false; // Invalid move
            }

            setBoardPosition(game.fen());
            // display the position of the piece
            // the move function moves the piece but the position is required to display the state on the board

            return true; // Valid move
        } catch (error: any) {
            toast.error("Invalid move")
            console.log(error)
            return false
        }
    };

    return (
        <Chessboard
            id="BasicBoard"
            position={boardPosition}
            onPieceDrop={onDrop}
            boardWidth={900}
        />
    );
}
