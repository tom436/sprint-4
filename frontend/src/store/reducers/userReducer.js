const initialState = {
    cart: [],
    currPurchase: null
};


export default function ItemReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                cart: action.cart
            }
            default:
                return state;

    }
}
