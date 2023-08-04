import axios from "axios";
import * as actionType from '../constants/cartConstant'

const URL = 'http://localhost:8000';

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } })
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message })
  }
}


export const removeToCart = (id) => (dispatch) => {
  dispatch({
    type: actionType.REMOVE_TO_CART,
    payload: id
  })

}


export const lessItemFromCart=(id,quantity)=>(dispatch)=>{
  dispatch({
    type:actionType.LESS_FORM_CART,
    payload:{id,quantity}
  })
}