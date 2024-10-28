import React from "react";
import FakeCards from "./fakeCards.jsx";

const FakeUI = () => {


    return (
        <div className="fa_body">
            <div className="fa_serach">
                <div className="searchBtn">
                </div>
                <div className="topResBtnDiv">
                    <button className='topResBtn resBtn'>Top Restaurents</button>
                </div>
                <div className='allResBtnDiv'>
                    <button className='allResBtn resBtn'>All Restaurents</button>
                </div>
            </div>
            <div className="fa_container">
               <FakeCards />
                <FakeCards />
                <FakeCards />
                <FakeCards />
                <FakeCards />
                <FakeCards />
                <FakeCards />
                <FakeCards />
                <FakeCards />
                <FakeCards />
            </div>
        </div>
    )

}

export default FakeUI;