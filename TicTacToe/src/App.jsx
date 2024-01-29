import { useState } from 'react'
import GameBoard from '../components/Gameboard/GameBoard'
import PlayerCard from '../components/PlayerCard/PlayerCard'
import './App.css'

function App() {
 
  const [activePlayer,setActivePlayer] = useState('X');
  function switchPlayer(){
    setActivePlayer((previous)=>previous==='X'?'O':'X');
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="playerContainer">
      <PlayerCard initialName="Player1" sendActive={activePlayer==='X'}></PlayerCard>
      <PlayerCard initialName="Player2" sendActive={activePlayer==='O'}></PlayerCard>
      </div>
      <GameBoard sendActive={activePlayer} switchFunction={switchPlayer}></GameBoard>
    </>
  )
}

export default App
