const initialState = {
    favorites: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] };
            case 'SET_FAVORITES':
            return { ...state, favorites: action.payload };
        default:
            return state;
    }
};

export default reducer;
