import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showCart:true,
    notification:null
}
const uiSlice = createSlice({
    name:'ui',
    initialState:initialState,
    reducers:{
        toggleCartVisibility(state){
            state.showCart = !state.showCart
        },
        showNotification(state,action)
        {
            state.notification = {status:action.payload.status,
                                    title:action.payload.title,
                                    message:action.payload.message
                                }
        }
    }


});
export const uiActions  = uiSlice.actions
export default uiSlice;