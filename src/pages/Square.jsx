import { useState } from "react";

const Square=()=>{
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState('')

    const handleAddition = () =>{
       const sum = parseFloat(number1) + parseFloat(number2);
       setResult(sum);
    }

    return(
        <>
            <h1>Addition : ${result}</h1>
            <input 
                type="number" 
                value={number1}
                onChange={(e)=>setNumber1(e.target.value)}
            /><br/>

            <input 
                type="number" 
                value={number2}
                onChange={(e)=>setNumber2(e.target.value)}
            /><br/>
            <button onClick={handleAddition}>Click Me</button>
        </>
    )
}
export default Square;