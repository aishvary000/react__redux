import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/homePage';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import RootLayout from './Pages/Root';
const router = createBrowserRouter([
{
  path:'/',
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'/',element:<HomePage/>
    },
    {
      path:'/products',
      element:<Products/>,
    },
    {
      path:'/products/:productId',
      element:<ProductDetail/>
    } 
  ]
},

]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
