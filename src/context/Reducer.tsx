
import { initial } from './Context'
import { Cartpops } from '../data'

export const enum ActionType {
    ADD_TO_CART= 'add_to_cart',
    REMOVE_FROM_CART = 'remove_from_cart',
    CHANGE_CART_QTY = 'change_cart_qty'
 
}
 


type Actions =
    |{type: ActionType.ADD_TO_CART, payload:Cartpops}
    |{type: ActionType.REMOVE_FROM_CART, payload:Cartpops}
    |{type:ActionType.CHANGE_CART_QTY, payload:Cartpops}


export const Reducer = (state = initial, action:Actions) => {
switch(action.type){
    case ActionType.ADD_TO_CART:
        return{...state, cart:[...state.cart, {...action.payload, qty:1}] };
    case ActionType.REMOVE_FROM_CART:
        return{...state, cart:state.cart.filter((c:Cartpops) => c.id !== action.payload.id)} ;
    case ActionType.CHANGE_CART_QTY:
        return {
            ...state, 
        cart: state.cart.filter((c:Cartpops) => 
            c.id === action.payload.id? c.qty=action.payload.qty : c.qty)
        }
}
}