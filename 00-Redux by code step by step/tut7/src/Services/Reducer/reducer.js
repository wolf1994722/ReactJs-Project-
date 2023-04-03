import {ADD_TO_CART} from '../constants'

const intialState = {
    cardData: [],
}

export default function cardItems(state=intialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardItems: action.data
            }
    
        default:
            return state
    }
}