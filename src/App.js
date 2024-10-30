import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Body from './components/Body';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";


const App = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/cart',
        element:<Cart/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
