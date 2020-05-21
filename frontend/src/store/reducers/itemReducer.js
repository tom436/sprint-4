const initialState = {
    items: [],
    currItem: null
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_ITEMS':
            return { ...state, items: action.items };
        case 'SET_ITEM':
            return { ...state, currItem: action.item };
        default:
            return state;
    }
}
