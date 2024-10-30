import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import FakeUI from "./FakeUI";

const TempComp = () => {
    const [bodyfaData, setBodyfaData] = useState([]);
    const [initialBodyfaData, setInitialBodyfaData] = useState([]);
    const [searchRes, setSearchRes] = useState("");
    const [page, setPage] = useState(1); // Track current page for infinite scroll

    useEffect(() => {
        // Initial data fetch
        fetchCards();

        // Scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fetchCards = async () => {
        try {
            const fetchedData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    lat: 19.0759837,
                    lng: 72.8776559,
                    is_seo_homepage_enabled: true,
                    page_type: "DESKTOP_WEB_LISTING",
                    page,
                }),
            });

            const fetchedDataJson = await fetchedData.json();
            const arr = fetchedDataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            if (page === 1) {
                setInitialBodyfaData(arr);
            }

            setBodyfaData((prevData) => [...prevData, ...arr]); // Append new data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleScroll = () => {
        // Detect when the user has scrolled to the bottom
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
            setPage((prevPage) => prevPage + 1); // Increment page count
            fetchCards();
        }
    };

    const handleTopResBtn = () => {
        const refinefaData = initialBodyfaData.filter((restaurant) => restaurant.info.avgRating > 4.2);
        setBodyfaData(refinefaData);
    };

    const handleAllResBtn = () => {
        setBodyfaData(initialBodyfaData);
    };

    return bodyfaData?.length === 0 ? (
        <FakeUI />
    ) : (
        <div className="fa_body">
            <div className="fa_serach">
                <div className="search_btn">
                    <input
                        type="text"
                        id="fa_search_btn_input"
                        value={searchRes}
                        onChange={(e) => setSearchRes(e.target.value)}
                    />
                    <button
                        id="fa_search_btn"
                        className="resBtn"
                        onClick={() => {
                            const refineData = initialBodyfaData.filter((restaurant) =>
                                restaurant?.info?.name.toLowerCase().includes(searchRes.toLowerCase())
                            );
                            setSearchRes("");
                            if (refineData.length === 0) {
                                console.log("No restaurant found");
                                return;
                            }
                            setBodyfaData(refineData);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="topResBtnDiv">
                    <button className="topResBtn resBtn" onClick={handleTopResBtn}>Top Restaurants</button>
                </div>
                <div className="allResBtnDiv">
                    <button className="allResBtn resBtn" onClick={handleAllResBtn}>All Restaurants</button>
                </div>
            </div>
            <div className="fa_container">
                {bodyfaData?.map((restaurant) => (
                    <Cards key={restaurant.info.id} resData={restaurant.info} />
                ))}
            </div>
        </div>
    );
};

export default TempComp;
