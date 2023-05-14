import { ADDTASK, HANDLEDONE } from "./ActionTypes"

export const addtask=(payload)=>{
    return(
        {
            type : ADDTASK ,
            payload
            
        }
    )
}

export const handledone=(payload)=>{
    return(
        {
            type : HANDLEDONE,
            payload
        }
    )
}