import React from 'react'

const Die = (props) => {
  return (
  
      <button onClick={props.holdDice} className={`h-[50px] w-[50px] shadow-md cursor-pointer shadow-gray-500 rounded-lg font-semibold text-[20px] ${props.isHeld ? 'bg-[#59E391]' : 'bg-white'}`}>{props.value}</button>
 
  )
}

export default Die