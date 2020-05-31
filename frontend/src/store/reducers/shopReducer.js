const initialState = {
    shops: [],
    filter:'',
    currShop: null
};

export default function ShopReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SHOPS':
            return {
                ...state,
                shops: action.shops
            }
        case 'SET_SHOP':
            return {
                ...state,
                currShop: action.shop
            }
        case 'ADD_SHOP':
            return {
                ...state,
                shops: [...state.shops, action.shop]
            }
        case 'UPDATE_SHOP':
            return {
                ...state,
                currShop:action.shop,
                shops: state.shops.map(shop => {
                    if(shop._id === action.shop._id) return action.shop;
                    return shop;
                })
          }
        case 'REMOVE_SHOP':
            return {
                ...state,
                shops: state.shops.filter(shop => shop._id !== action.shopId)
          }
          case 'SET_FILTER':
            return {
                ...state,
                filter: action.filter
          }
        default:
            return state;
    }
}



