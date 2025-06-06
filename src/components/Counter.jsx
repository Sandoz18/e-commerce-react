import React from "react"
import { useState } from "react"
function Counter ( ) {
  //let count = 10
  //no usar let , intentar siempre usar const, no modificar estados de otra forma que no sea con su función setter!!!
  const [count,  setCount ] = useState(0)

  //esto está bien para js común pero en React lo hacemos mediante un estado.
  //operador ternario para que si un valor es - 1 el valor sea 0
  const  HandleRestar  =() => setCount  (count > 0 ? count - 1: 0)
  const HandleSumar =() =>  setCount  (count + 1)
return(
    <>
    <div style={{display: 'flex', flexDirection: 'column' , gap: 10, width: 400}}>
    <p style={{border: 'solid white 3px' , padding: 10, borderRadius: 5 , color: 'white'}}>{count} </p>
    <div style={{display: 'flex', gap:10  }}>
    <button className="bg-blue-#134395" style={ {  width:   '50%'  } } onClick={HandleRestar}> -</button>
     <button style={ {  width:   '50%'   } } onClick={HandleSumar}> +</button>
</div>
    </div>
    </>
)    

}

export default Counter