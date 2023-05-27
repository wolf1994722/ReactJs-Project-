//! shankar bhaiya which is going to implement demand of bat and ball

const reducer = (state=0, action) => {
    if(action.type === 'increase') {
        return state + action.payload
    } else if(action.type === 'decrease') {
        return state - action.payload
    } else {
        return state
    }
}

export default reducer