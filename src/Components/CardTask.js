import { useDispatch } from "react-redux"
import { handledone } from "../Redux/Actions"

const CardTask=({el})=>{
    const dispatch=useDispatch()
    return(
        <div>
            <h2>{el.text}</h2>
            <h2>{el.done ? "True" : "False"}</h2>
            <button>Delete</button>
            <button onClick={()=>dispatch(handledone(el.id))}>Done</button>
        </div>
    )
}


export default CardTask