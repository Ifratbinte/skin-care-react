export const reducer = (state, action) => {
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item: state.item.filter((currentItem) => {
                return currentItem.id !== action.payload;
            }),
        };
    }

    if (action.type === "CLEAR_CART"){
        return{
            ...state,
            item: []
        }
    }

    if(action.type === "INCREMENT"){
        let updatedCart = state.item.map((currentElm) => {
            if(currentElm.id === action.payload){
                return{...currentElm, amount:currentElm.amount + 1}
            }
            return currentElm
        });
        return {...state, item: updatedCart}
    }

    // if(action.type === "GET_TOTAL"){ //accummlator store data in one place
    //     let { totalItem } = state.item.reduce((accummlator, currentVal) => {
    //         let {amount} = currentVal;
    //         accummlator.totalItem += amount;
    //         return accummlator
    //     }, {
    //         totalItem: 0
    //     });
    //     return { ...state, totalItem };
    // }
    return state;
};