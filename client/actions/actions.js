export const ADD_EVENT = (event) => {
    return({ type: 'ADD_EVENT', payload: event })
}


export const GET_EVENTS = (res) => {
    return({ type: 'GET_EVENTS', payload: res})
}

export const DELETE_EVENT = (event) => {
    return ({ type: 'DELETE_EVENT', payload: event})
}
