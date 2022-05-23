export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    //console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
    
            // Clono il carrello
            let newBasket = [...state.basket];

            // Controllo del prodotto nel carrello tramite id
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                // Se l'indice è presente nel carrello, rimuovi l'elemento
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Non puoi rimuovere il prodotto (id: ${action.id})`
                );
            }

            return {
                ...state, 
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;