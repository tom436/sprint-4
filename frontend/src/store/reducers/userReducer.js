let localLoggedUser = null;
if (sessionStorage.user) localLoggedUser = JSON.parse(sessionStorage.user);


const initialState = {
    cart: [],
    cartLength:0,
    currPurchase: null,
    totalPrice: 0,
    loggedUser: localLoggedUser,
    users: []
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state, 
                cart: action.cart,
                cartLength: state.cartLength+1
            }
        case 'REMOVE_ITEM': {
            return {
                ...state,
                cartLength: state.cartLength-1,
                cart:
                    state.cart.map((purchase, idx) => {
                        if (idx != action.itemToRemove.itemId) return purchase
                        else {
                            return purchase.items.filter(item => item.id !== action.itemToRemove.itemId);
                        }
                    })
            }
        }
        case 'SET_PRICE':
            return {
                ...state,
                totalPrice: action.totalPrice
            }
        case 'SET_USER':
            return { ...state, loggedUser: action.user };
        case 'USER_REMOVE':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            };
        case 'SET_USERS':
            return { ...state, users: action.users };
        default:
            return state;

    }
}
