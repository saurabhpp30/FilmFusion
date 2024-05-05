
export const taskReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_TASK':
            // console.log(payload.products)
            return { ...state, Taskperformernew: payload.products }
        default:
            return state;
    }
}