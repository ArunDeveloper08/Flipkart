
import * as actionType from "../constants/cartConstant"

export const cartReducer = (state = { cartItems: [] }, action) => {
   switch (action.type) {
      case actionType.ADD_TO_CART:
         const item = action.payload;
         const exist = state.cartItems.find(product => product.id === item.id);
         if (exist) {
            const newCart = state.cartItems.map(data => {
               if (data.id === item.id) {
                  data.quantity++;
               }
               return data;
            })
            console.log(({ ...state, cartItems: [newCart] }))
            return ({ ...state, cartItems: newCart })
            // return {
            //    ...state,
            //    cartItems: state.cartItems.map(data =>
            //       data.product === exist.product ? item : data
            //    )
            // }
         } else {
            return ({ ...state, cartItems: [...state.cartItems, item] });
         }
      // console.log(action.payload)
      // return {
      //    ...state,
      // }

      case actionType.REMOVE_TO_CART:
         return {
            ...state,
            cartItems: state.cartItems.filter(product =>
               product.id !== action.payload)
         };

      case actionType.LESS_FORM_CART:
         const lessItem = action.payload;
         const lessExist = state.cartItems.find(data => data.id === lessItem.id)
         if (lessExist) {
            const newCart2 = state.cartItems.map(data => {
               if (data.id === lessItem.id) {
                  data.quantity = data.quantity - 1;
                  return data
               } else {
                  return data
               }
            })
            console.log(newCart2);
            return {
               ...state, cartItems: newCart2
            }
         } else {
            return state
         }

      default:
         return state;
   }

}