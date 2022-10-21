
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
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: handleProductAndCartData,
          element: <Shop></Shop>,
        },
        {
          path: "/shop",
          loader: handleProductAndCartData,
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: handleProductAndCartData,
          element: (
            <PrivateRoutes>
              <Orders></Orders>
            </PrivateRoutes>
          ),
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoutes>
              <Inventory></Inventory>
            </PrivateRoutes>
          ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
