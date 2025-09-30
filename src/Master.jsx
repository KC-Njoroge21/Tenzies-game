import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

const Master = () => {

  const [numbers, setNumbers] = React.useState(generateRandomNumber())

  function rollDice() {
   if (!gameWon) {
     setNumbers((prevState) => {
      return(
         prevState.map((item) => {
          return (
            item.isHeld ? item : {...item, value: Math.ceil(Math.random() * 6)}
          )
        })
      )
       
    })
   } else {
    setNumbers(generateRandomNumber)
   }
  }

  function holdDice(id) {
    setNumbers((prevState) => {
      return (
        prevState.map((item) => {
         return (
           item.id === id ?  {...item, isHeld: !item.isHeld} : item
         )
        })
      )
    })
  }

  

  function generateRandomNumber() {
   return Array(10).fill(0)
                  .map(() => {
                    return {
                     value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()
                    }
                  })
  }

  const die = numbers.map((item) => {
    return <Die key={item.id} id={item.id} value={item.value} isHeld={item.isHeld} holdDice={() => {holdDice(item.id)}} />
  })

  
  const gameWon = numbers.every((number) => {
      return number.isHeld
    }) && numbers.every((number) => {
      return number.value === numbers[0].value
    })

  
 
  

  return (
    <section className="bg-blue-950 p-4 h-screen flex flex-col justify-center items-center">
      <div className="bg-[#F5F5F5] h-full rounded-xl max-h-[400px] max-w-[400px] w-full flex flex-col justify-center items-center gap-6 p-3 ">
       
        <h1 className="text-4xl font-semibold">Tenzies</h1>
        <p className="text-center">
          Roll until all dice are the same. Click each die to freeze it at its currrent value between rolls.
        </p>
        <div className="grid grid-cols-5 grid-rows-2 gap-4">
          {die}
        </div>
        <button onClick={rollDice}  className="bg-blue-950 text-white px-4 py-2 rounded-md mt-4 font-semibold cursor-pointer">{gameWon ? "New Game" : "Roll"}</button>
      </div>
    </section>
  );
};

export default Master;
