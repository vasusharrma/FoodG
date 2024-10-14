import React from 'react';
import ReactDOM from 'react-dom/client';

/*
* Header
*   - Logo
*   - navbar items
* Body
*   - search
*   - restroConatainer
*       -restroCard
* Fotter
*   -Address
*   -Copyright
*   -Links
*   -Contact
*/

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"/>
            </div>
           <div className='header-nav-items'>
               <ul>
                   <li>Home</li>
                   <li>Contact Us</li>
                   <li>About Us</li>
                   <li>Cart</li>
               </ul>
           </div>
        </div>
    )
}

// const Body = () => {
//     return(
//
//     )
// }
//
const App = () =>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
