import { FETCH_POSTS, CREATE_POST } from '../actions/types.js'

const initialState = {
    items: [],
    item: {}
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log({
                ...state,
                items: action.payload
            })
            return {
                ...state,
                items: action.payload
            }
        case CREATE_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

export default reducer;