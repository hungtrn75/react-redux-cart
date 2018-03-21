import * as Message from './../constants/Message';
import * as types from './../constants/ActionTypes';
let initialState = Message.MSG_WELCOME;

const message = (state = initialState, action)=>{
    switch (action.type) {
        case types.UPDATE_MESSAGE:
            return action.message;   
        default:
            return state;    
    }    
}

export default message;