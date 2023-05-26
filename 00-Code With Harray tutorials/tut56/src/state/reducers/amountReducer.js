//! shankar bhaiya which is going to implement demand of bat and ball

// eslint-disable-next-line no-undef
export default reducer = (state=0, action) => {
    if(action.type === 'increase') {
        return state + action.payload
    } else if(action.type === 'decrease') {
        return state - action.payload
    } else {
        return state
    }
}