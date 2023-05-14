import { ADDTASK, HANDLEDONE } from "./ActionTypes"

const initialstate={
        tasks : [
            {text : "Wakeup",id: Math.random(),done:false},
            {text : "breakfast",id:Math.random(),done:false}
            
        ]
}


const Reducer=(state=initialstate,action)=>{
    switch (action.type) {
        
            case ADDTASK : return {...state,tasks : [...state.tasks,{text:action.payload,id:Math.random(),done:false}]}
            case HANDLEDONE : return {...state,tasks : state.tasks.map(el=> el.id == action.payload ? {...el,done : !el.done} : el)}
        
        default: return state
            
    }
}


export default Reducer