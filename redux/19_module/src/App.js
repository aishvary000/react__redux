import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import  {useSelector,useDispatch} from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;
function App() {

  const isCartVisible = useSelector(state => state.ui.showCart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  const cart = useSelector(state => state.cart);
  useEffect(() => {

    if(isInitial)
    {
      isInitial = false;
      return;
    }
    const sendCartData = async() => {
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'Fetching',
        message:'Sending cart data....'
      }));
      const response = await fetch('https://react-http-4bd40-default-rtdb.firebaseio.com/cart.json',
      {
        method:'PUT',
        body:JSON.stringify(cart)
      })
      if(!response.ok)
      {
        
        throw new Error("Failed to send data..")
      }
      dispatch(uiActions.showNotification({
        status:'success',
        title:'success !!',
        message:'Sent cart data successfully...'
      }))

      

    }
    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status:'error',
        title:'error',
        message:'Failed to send data....'
      }))
    })
    
  },[cart,dispatch])
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message = {notification.message}/>}
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
