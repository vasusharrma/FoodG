import React from "react"; import Cards from "./Cards";
import {useState , useEffect} from "react";
import FakeUI from "./FakeUI";
import {Link} from "react-router-dom";
import SearchCity from "./SearchCity.jsx";

const Body = () => {

    const[bodyfaData , setBodyfaData] = useState([]);
    const[initialBodyfaData , setInitialBodyfaData] = useState([]);
    const[searchRes , setSearchRes ] = useState("");
    const[currCity , setCurrCity] = useState([30.015538499999998 , 77.60388038805745]);


    useEffect(()=>{
        fetchCards();
    } , [currCity]);


    const fetchCards = async () =>{
        // const fetchedData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.967157&lng=77.552391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING `);
        const fetchedData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${currCity[0]}&lng=${currCity[1]}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING `);
        const fetchedDataJson = await fetchedData.json();
        const arr = fetchedDataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setInitialBodyfaData(...[arr]);
        setBodyfaData(...[arr]);
    }


    const handleTopResBtn = () => {
        const refinefaData = initialBodyfaData.filter((restaurent => restaurent.info.avgRating > 4.2));
        setBodyfaData(refinefaData);
    }

    const handleAllResBtn = () =>{
        setBodyfaData(...[initialBodyfaData]);
    }


        return bodyfaData?.length === 0 ? (
            <FakeUI/>
        ) : (
            <div className="fa_body">
                <div className="fa_serach">
                    <div className="search_btn">
                        <input type='text' id='fa_search_btn_input'  value={searchRes} htmlFor='search' onChange={(e) =>{
                           setSearchRes(e.target.value);
                        }} />
                        <button   id='fa_search_btn' className='resBtn' onClick = {() => {

                            const refineData = initialBodyfaData.filter((restaurent) => restaurent?.info?.name.toLowerCase().includes(searchRes.toLowerCase()));
                            setSearchRes("");
                            if(refineData.length === 0){
                                console.log("No restaurent found ");
                               return;
                            }
                            setBodyfaData(refineData);
                        }}>Search</button>
                    </div>
                    <div className="topResBtnDiv">
                        <button className='topResBtn resBtn' onClick={handleTopResBtn}>Top  Restaurents</button>
                    </div>
                    <div className='allResBtnDiv'>
                        <button className='allResBtn resBtn' onClick={handleAllResBtn}>All  Restaurents</button>
                    </div>
                    <SearchCity setCurrCity={setCurrCity}/>
                </div>
                <div className="fa_container">
                    {
                        bodyfaData?.map((restaurant) => (<Link className="body_link"  key={restaurant.info.id}  to={`/restaurants/${restaurant.info.id}` }><Cards resData={restaurant.info} /></Link>))
                    }
                </div>
            </div>
        )

}

export default Body;
