import React from "react";
import Cards from "./Cards";
import faData from "../utils/Data.js";
import {useState} from "react";
const Body = () => {

    const[bodyfaData , setBodyfaData] = useState(faData);


    const handleTopResBtn = () => {
        const refinefaData = bodyfaData.filter((restaurent => restaurent.data.avgRating >= 4.0));
        setBodyfaData(refinefaData);
    }

    const handleAllResBtn = () =>{
        setBodyfaData([...faData]);
    }


    return(
        <div className="fa_body">
            <div className="fa_serach">
               <div className="topResBtnDiv">
                   <button className='topResBtn resBtn' onClick={handleTopResBtn}>Top Rated Restaurents</button>
               </div>
                <div className='allResBtnDiv'>
                    <button className='allResBtn resBtn' onClick={handleAllResBtn}>All Top Restaurents</button>
                </div>
            </div>
            <div className="fa_container">
                {
                bodyfaData.map((restaurant) => (<Cards key={restaurant.data.id} resData={restaurant} />))
                }
            </div>
        </div>
    )
}

export default Body;