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
                orders: [action.order, ...state.orders]
            }
        case 'UPDATE_ORDER':
            
            return {
                ...state,
                orders: state.orders.map(order => {
                    if (order._id === action.order._id) return action.order;
                    return order;
                })
            }
        default:
            return state;
    }
}



