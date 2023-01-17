import { ADD_USER, DELETE_USER, GET_USERS, UPDATED_USER } from "./actionTypes";

const stateGlobale= {
    users:[],
    loading:true,
    msg:null,
    err:null
}

const reducer = (state=stateGlobale,{type,payload}) => {
    switch (type) {
        case GET_USERS:
        return {
            ...state,users:payload,
            loading : false
        }     
        case DELETE_USER:
            return {
                // ...state,msg:payload,
                ...state, users : state.users.filter(el=>el._id!=payload),
               loading : false
            } 
            case ADD_USER:
                return {
                ...state,users:[...state.users,payload]
                // ...state,users: state.users.push(payload)
                } 
            case UPDATED_USER:
                    return {
                    ...state,users: state.users.map(
                        el=> el._id === payload.x? payload.data:el
                    )
                    } 
    
        default:
           return state
    }
}
export default reducer