export const initialState = {
    basket : [],
    user : null,
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) =>
         item.price + amount,0)
    

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return  {...state,
                basket:[...state.basket,action.item] 
            } 
            break;
        case 'REMOVE_FROM_BASKET':
           const newBasket = state.basket
           const index = state.basket.findIndex(
               (basketItem) => basketItem.id === action.id
           ) 
           if (index >= 0){
                newBasket.splice(index,1);

           }else {
                console.warn(`Item doesn't exist in list`)
           }
            return{...state,basket: newBasket
                
            }
            break;
            case 'SET_USER':
                return {
                    ...state,
                    user: action.user
                }
        default:
            return state;
    }
}



export default reducer ;