export const reducer = (state, action) => {
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item: state.item.filter((currentItem) => {
                return currentItem.id !== action.payload;
            }),
        };
    }
    return state;
};