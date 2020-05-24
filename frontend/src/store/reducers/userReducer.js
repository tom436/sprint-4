const initialState = {
    cart: [],
    currPurchase: null,
    totalPrice:0
};

export default function ItemReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CART':

            return {
                ...state,
                cart: action.cart
            }
        case 'REMOVE_ITEM': {
            return {
                ...state,
                cart:
                    state.cart.map((purchase, idx) => {
                        if (idx != action.itemToRemove.itemId) return purchase
                        else {
                            return purchase.items.filter(item => item.id !== action.itemToRemove.itemId);
                        }
                    })
            }
        }
        case 'SET_CART':

            return {
                ...state,
                totalPrice:action.totalPrice
            }
        default:
            return state;

    }
}
