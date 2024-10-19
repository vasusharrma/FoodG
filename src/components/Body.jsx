import React from "react";
import Cards from "./Cards";
import faData from "../utils/Data.js";
import {useState , useEffect} from "react";
const Body = () => {

    const[bodyfaData , setBodyfaData] = useState([]);

    useEffect(()=>{
        fetchCards();
    } , []);


    const fetchCards = async () =>{
        const fetchedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");
        console.log("hellogi");
        const fetchedDataJson = await fetchedData.json();
        console.log("fetcehd data" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info);
        console.log("fetcehd data" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.name);
        console.log("fetcehd data" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating);
        console.log("fetcehd data" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.cloudinaryImageId);
        console.log("fetcehd data" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id);
        console.log("fetcehd data" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.costForTwo);
        console.log("fetcehd data" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.cuisines);
        console.log("fetched data before setbodyfaData" , fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setBodyfaData(...[fetchedDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants]);
        console.log("bodyfadata is" , bodyfaData);
        console.log("second id is " , bodyfaData[1].info.id);
    }


    const handleTopResBtn = () => {
        const refinefaData = bodyfaData.filter((restaurent => restaurent.data.avgRating >= 4.0)); setBodyfaData(refinefaData);
    }

    const handleAllResBtn = () =>{
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
