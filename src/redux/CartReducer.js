import { createSlice } from "@reduxjs/toolkit";

const cartState = {
    foodOrder: [],
    totalPrice: 0,
    totalSelected: 0,
}

const cartReducer = createSlice({
    name: "cartSlice",
    initialState: cartState,
    reducers: {
        addToCart(state, action){
            let foodArr = state.foodOrder
            state.totalPrice += action.payload.amount * action.payload.price
            state.totalSelected += action.payload.amount

            if(foodArr.length === 0){
                foodArr.push(action.payload)
            }else{
                const foodIndex = foodArr.findIndex(order=>{
                    return order.Id === action.payload.Id;
                })
                if(foodIndex === -1){
                    foodArr.push(action.payload)
                }else{
                    let food = foodArr[foodIndex]
                    foodArr[foodIndex] = {...food, amount: action.payload.amount + food.amount }
                }
            }
        },
        removeFromCart(state, action){
            let foodArr = state.foodOrder
            state.totalPrice -= action.payload.price
            state.totalSelected -= 1

            const foodItemIndex = foodArr.findIndex(food=>{
                return food.Id === action.payload.Id
            })

            if(foodArr[foodItemIndex].amount === 1){
                foodArr.splice(foodItemIndex, 1)
            }else{
                foodArr[foodItemIndex] = {...foodArr[foodItemIndex], amount: foodArr[foodItemIndex].amount - 1}
            }
        },
    }
})

export default cartReducer;
export const cartAction = cartReducer.actions;