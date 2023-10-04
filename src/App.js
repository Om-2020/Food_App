import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {Outlet, createBrowserRouter,RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";


const AppLayout = ()=>{
    return (
      <Provider store={appStore}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </Provider>
    );
}

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"/cart",
                element: <Cart/>

            },
            {
                path:"/restaurants/:resid",
                element: <RestaurantMenu/>
            }
            

        ],
        errorElement: <Error/>

    }

])

 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
