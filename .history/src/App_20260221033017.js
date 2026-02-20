
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const human = "O";
  const ai = "X";

  const handleClick = (index) => {
    if (board[index] !== "" || checkWinner(board, human) || checkWinner(board, ai)) return;

    const newBoard = [...board];
    newBoard[index] = human;
    setBoard(newBoard);

    setTimeout(() => {
      const bestMove = minimax(newBoard, ai).index;
      if (bestMove !== undefined) {
        newBoard[bestMove] = ai;
        setBoard([...newBoard]);
      }


      
    }, 500);
  };

  const checkWinner = (board, player) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === player)
    );
  };

  const getEmptyIndexes = (board) => {
    return board.map((val, i) => val === "" ? i : null).filter(v => v !== null);
  };

  const minimax = (newBoard, player) => {
    const availSpots = getEmptyIndexes(newBoard);

    if (checkWinner(newBoard, human)) return { score: -10 };
    else if (checkWinner(newBoard, ai)) return { score: 10 };
    else if (availSpots.length === 0) return { score: 0 };

    let moves = [];

    for (let i = 0; i < availSpots.length; i++) {
      let move = {};
      move.index = availSpots[i];
      newBoard[availSpots[i]] = player;

      if (player === ai) {
        let result = minimax(newBoard, human);
        move.score = result.score;
      } else {
        let result = minimax(newBoard, ai);
        move.score = result.score;
      }

      newBoard[availSpots[i]] = "";
      moves.push(move);
    }

    let bestMove;
    if (player === ai) {
      let bestScore = -Infinity; 
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  };

  const restartGame = () => setBoard(Array(9).fill(""));

  return (
    <div className="container">
      <h1>Tic Tac Toe with AI 🤖</h1>
      <div className="board">
        {board.map((cell, i) => (
          <div className="cell" key={i} onClick={() => handleClick(i)}>
            {cell}
          </div>
        ))}
      </div>
      <button onClick={restartGame}>Restart Game</button>
      <h2>{checkWinner(board, human) ? "You Win!" : checkWinner(board, ai) ? "AI Wins!" : getEmptyIndexes(board).length === 0 ? "It's a Draw!" : ""}</h2>
    </div>
  );
}

export default App;
