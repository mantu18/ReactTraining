import { useState } from 'react';
import './GameBoard.css';

const initialGameboard =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({sendActive, switchFunction}){
    const [gameboard, setGameBoard] = useState(initialGameboard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((previous)=>{
            const updatedBoard = [...previous.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex] = sendActive;
            return updatedBoard;
        })
        switchFunction()

    }
    return(
        <ol id='gameboard'>
            {gameboard.map((row, rowIndex)=><li key={rowIndex}> 
                <ol>
                    {row.map((playerSymbol, colIndex)=><li key={colIndex}>
                        <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}