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
*           -img
*           -Names of restaurent , Star Rating , cuisine , delivery date
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

const Fa_Cards = () => {
    return(
        <div className="fa_card">
            <div className="fa_card_img">
                <img alt='fa-image' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/86fdb4a4c99ab1e9988b1bc75d0feffe'/>
            </div>
            <h3>Red Chilli</h3>
            <h5>Kaju Katli , Roorkee , North India</h5>
            <div className="fa_card_ratings">
                <h5>4.5 ⋆ </h5><h5> 15 minutes</h5>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className="fa_body">
           <div className="fa_serach">
              Search
           </div>
            <div className="fa_container">
               <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
                <Fa_Cards />
            </div>
        </div>
    )
}

const App = () =>{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
