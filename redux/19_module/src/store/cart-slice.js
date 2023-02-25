import  {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0,
        totalPrice:0

    },
    reducers:{
        addItemToCart(state,action){
            state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.items.find(item => (item.id === newItem.id));
            console.log(existingItem);
            if(!existingItem)
            {
                console.log(newItem.id + " " + newItem.price + " " + newItem.name);
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name
                });
            }
            else{
                console.log("HERE" + existingItem);
                existingItem.quantity+=1;
                existingItem.totalPrice+=newItem.price;
            }
        },
        removeItemFromCart(state,action){
            const id = action.payload;
            state.totalQuantity--;
            const existingItem = state.items.find(item => (item.id === id));
            if(existingItem.quantity === 1)
            {
                state.items = state.items.filter(item => item.id !== id);
            }
            else
            {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

        }

    }
})
const sendCartData = (cartData) => {
    return (dispatch) =>{
        dispatch()
    }
}
export const cartActions = cartSlice.actions;
export default cartSlice;
