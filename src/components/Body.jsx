import React from "react"; import Cards from "./Cards";
import {useState , useEffect} from "react";
import FakeUI from "./FakeUI";

const Body = () => {

    const[bodyfaData , setBodyfaData] = useState([]);
    const[initialBodyfaData , setInitialBodyfaData] = useState([]);
    const[searchRes , setSearchRes ] = useState("");


    useEffect(()=>{
        fetchCards();
    } , []);


    const fetchCards = async () =>{
        const fetchedData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING `);
        const fetchedDataJson = await fetchedData.json();

        const arr = fetchedDataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setInitialBodyfaData(...[arr]);
        setBodyfaData(...[arr]);
        console.log(bodyfaData);
    }


    const handleTopResBtn = () => {
        const refinefaData = bodyfaData.filter((restaurent => restaurent.info.avgRating > 4.2));
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
                        <input type='text'  value={searchRes} for='search' onChange={(e) =>{
                           setSearchRes(e.target.value);
                        }} />
                        <button  id='fa_search_label' onClick = {() => {

                            const refineData = bodyfaData.filter((restaurent) => restaurent?.info?.name.toLowerCase().includes(searchRes.toLowerCase()));
                            setBodyfaData(refineData);
                        }}>Search</button>
                    </div>
                    <div className="topResBtnDiv">
                        <button className='topResBtn resBtn' onClick={handleTopResBtn}>Top  Restaurents</button>
                    </div>
                    <div className='allResBtnDiv'>
                        <button className='allResBtn resBtn' onClick={handleAllResBtn}>All  Restaurents</button>
                    </div>
                </div>
                <div className="fa_container">
                    {
                        bodyfaData?.map((restaurant) => (<Cards key={restaurant.info.id} resData={restaurant.info} />))
                    }
                </div>
            </div>
        )

}

export default Body;
