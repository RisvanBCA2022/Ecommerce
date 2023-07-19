import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Count = (props) => {
    const navigate=useNavigate()
    const [count, setCount] = useState(props.obj.qty);

    const increment=()=>{
        setCount(count+1)
        props.obj.qty=count+1
        navigate('/Cart')
        
    }

    const decrement=()=>{
        if(count>1){
        setCount(count-1)
        props.obj.qty=count-1
        navigate('/Cart')
        }

    }
    const totalamount=props.obj.newPrice*props.obj.qty
    const total=totalamount
    console.log(totalamount)

    
  return (
    <div>
         <button
                    className="btn btn-primary"
                    onClick={increment}
                  >
                    +
                  </button>
                  
                  {count}
                  <button
                    className="btn btn-primary"
                    
                    onClick={decrement}
                  >
                    -
                  </button>
                  {/* <p>{totalamount} </p> */}


                
    </div>
  )
}

export default Count