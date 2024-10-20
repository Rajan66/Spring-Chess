import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";

export default function ChessGame() {
    const [game, setGame] = useState(new Chess());
    const [boardPosition, setBoardPosition] = useState(game.fen());

    const onDrop = (sourceSquare: string, targetSquare: string) => {
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
        return true; // Valid move
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
