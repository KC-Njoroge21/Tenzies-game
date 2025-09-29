import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

const Master = () => {

  const [numbers, setNumbers] = React.useState(generateRandomNumber())

  function rollDice() {
    setNumbers(generateRandomNumber())
  }

  function holdDice(id) {
    console.log(id)
  }

  

  function generateRandomNumber() {
   return Array(10).fill(0)
                  .map(() => {
                    return {
                     value: Math.ceil(Math.random() * 6), isHeld: true, id: nanoid()
                    }
                  })
  }

  const die = numbers.map((item, index) => {
    return <Die key={item.id} id={item.id} value={item.value} isHeld={item.isHeld} holdDice={() => {holdDice(item.id)}} />
  })

  
  

  
 
  

  return (
    <section className="bg-blue-950 p-4 h-screen flex flex-col justify-center items-center">
      <div className="bg-[#F5F5F5] h-full rounded-xl max-h-[400px] max-w-[400px] w-full flex flex-col justify-center items-center ">
        <div className="grid grid-cols-5 grid-rows-2 gap-4">
          {die}
        </div>
        <button onClick={rollDice}  className="bg-blue-950 text-white px-4 py-2 rounded-md mt-4 font-semibold cursor-pointer">Roll</button>
      </div>
    </section>
  );
};

export default Master;
