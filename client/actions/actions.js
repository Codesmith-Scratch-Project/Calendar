export const ADD_EVENT = (event) => {
    return({ type: 'ADD_EVENT', payload: event })
}


export const GET_EVENTS = () => {
    return({ type: 'GET_EVENTS'})
}

export default ADD_EVENT;