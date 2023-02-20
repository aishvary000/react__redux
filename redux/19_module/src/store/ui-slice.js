import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showCart:true
}
const uiSlice = createSlice({
    name:'ui',
    initialState:initialState,
    reducers:{
        toggleCartVisibility(state){
            state.showCart = !state.showCart
        }
    }


});
export const uiActions  = uiSlice.actions
export default uiSlice;