import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Body from './components/Body';
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import ResMenu from "./components/ResMenu.jsx";


const App = () =>{
    const[currLocation , setCurrLocation] = useState("Saharanpur");


    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
             path:'/',
             element:<Body />
            },
            {
               path:'/about',
               element:<About/>,
            },
            {
               path:'/contact',
               element:<Contact/>,
            },
            {
                path:'/cart',
                element:<Cart/>,
            },
            {
                path:'/restaurants/:resId',
                element:<ResMenu />,
                errorElement:<Error/>
            }

        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
