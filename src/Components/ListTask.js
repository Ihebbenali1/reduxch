import { useSelector } from "react-redux"
import CardTask from "./CardTask"

const ListTask=()=>{
    const tasks=useSelector(state=>state.tasks )
    return(
        <div> 
            {
                tasks.map(el=> <CardTask el={el}/>)
            }
        </div>
    )
}


export default ListTask