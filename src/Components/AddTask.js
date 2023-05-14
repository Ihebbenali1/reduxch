import { useState } from "react"
import { addtask } from "../Redux/Actions"
import { useDispatch } from "react-redux"

const AddTask=()=>{
    const [textP,setTextP]=useState('')
    const dispatch=useDispatch()
    return (

        <div>
            <input type="text" placeholder="Add a task" onChange={(e)=>setTextP(e.target.value)} ></input>
            <button onClick={()=>dispatch(addtask(textP))} >Add</button>

        </div>
    )
}

export default AddTask