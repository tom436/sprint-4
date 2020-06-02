const initialState = {
    orders: []
};

export default function OrderReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ORDERS':
            return {
                ...state,
                orders: action.orders
            }
        case 'ADD_ORDER':
            return {
                ...state,
                orders: [action.order, ...state.orders ]
            }
        default:
            return state;
    }
}



