import React from 'react'
import { useState } from 'react'
const Ludoboard = () => {

    let updateBlue =()=>{
        setMoves({...Moves , Blue: Moves.Blue+=1 })
    }
    let ugre =()=>{
        setMoves({...Moves , Green: Moves.Green+=1 })
    }
    let uy =()=>{
        setMoves({...Moves , Yellow: Moves.Yellow+=1 })
    }
    let ur =()=>{
        setMoves({...Moves , Red: Moves.Red+=1 })
    }

let [Moves, setMoves]= useState({Blue:0 ,Yellow:0  ,Green: 0 , Red:0})
  return (
    <div>
      <p>Game Begins</p>
      <div className='board'>
        <p >  Blue move={Moves.Blue}  </p>
        <button style={{backgroundColor: 'blue'}}  onClick={updateBlue}>+1</button>
        <p>Yello move={Moves.Yellow}  </p>
        <button style={{backgroundColor:'Yellow'}}  onClick={uy}>+1</button>
        <p>Green move={Moves.Green} </p>
        <button style={{backgroundColor: 'Green'}}  onClick={ugre}>+1</button>
        <p>Red move={Moves.Red} </p>
        <button style={{backgroundColor: 'red'}}  onClick={ur}>+1</button>

      </div>
    </div>
  )
}

export default Ludoboard
