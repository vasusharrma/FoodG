import React from "react";
import Cards from "./Cards";
import faData from "../utils/Data.js";
import {useState , useEffect} from "react";
const Body = () => {

    const[bodyfaData , setBodyfaData] = useState([]);
    const[initialBodyfaData , setInitialBodyfaData] = useState([]);

    useEffect(()=>{
        fetchCards();
    } , []);


    const fetchCards = async () =>{
        const fetchedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");
        const fetchedDataJson = await fetchedData.json();
        const arr = fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setInitialBodyfaData(...[arr]);
        setBodyfaData(...[arr]);
    }


    const handleTopResBtn = () => {
        const refinefaData = bodyfaData.filter((restaurent => restaurent.info.avgRating >= 4.0));
        setBodyfaData(refinefaData);
    }

    const handleAllResBtn = () =>{
        setBodyfaData(...[initialBodyfaData]);
    }

    while(bodyfaData.length > 0){
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
                        bodyfaData.map((restaurant) => (<Cards key={restaurant.info.id} resData={restaurant.info} />))
                    }
                </div>
            </div>
        )
    }

    return;


}

export default Body;
