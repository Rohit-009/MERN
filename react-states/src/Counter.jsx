import { useState } from "react";

export default function Counter(){
   let [count, setCount ]= useState(0);

   function incCount ()  {
            setCount(count+1)
            
   }
   function clear(){
        setCount(0)
        console.log("cleared countr")

   }

    return(
        <div>
            <h3>Count= {count}</h3>
            <button onClick={incCount} > Increase Count</button>
            <button onClick={clear} > Clear Count</button>
        </div>
    )
};