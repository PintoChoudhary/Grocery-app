import { ActionTypes } from "../constants/actions-type";
export const addToCart = (product) => {
    return{
        type:ActionTypes.ADD_TO_CART,
        payload: product
    }
}