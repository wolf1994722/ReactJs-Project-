//! mami papa ( bat ke liya demand )

export const incMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'increase',
            payload: amount
        })
    }
}

export const decMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'decrease',
            payload: amount
        })
    }
}