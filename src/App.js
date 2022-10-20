
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { handleProductAndCartData } from './loaders/loaders';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, children: [
        {
          path: '/',
          loader: handleProductAndCartData,
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: handleProductAndCartData,
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: handleProductAndCartData,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
