import {useState , useEffect} from 'react';
import FakeUI from "./FakeUI.jsx";
import ResMenuItems from "./ResMenuItems";

const ResMenu = () => {
    const[resInfo , setResInfo] = useState(null);
    const[initialResInfo , setInitialResInfo] = useState([]);



    useEffect(() => {
        fetched();
    } , []);

    const fetched = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9680035&lng=77.55520659999999&restaurantId=518651&catalog_qa=undefined&submitAction=ENTER\n");
        const toJson = await res.json();
        setResInfo(toJson);
        console.log("res info is " , toJson);
        setInitialResInfo(toJson);
    }

    if(resInfo === null){
        return <FakeUI />
    }


    const{ name, sla , avgRating, costForTwoMessage , totalRatingsString , cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
    const{itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("items is " , itemCards);
    return(
        <div className="resmenu_out_outside">
            <div className="resmenu_outside">
                <div className="res_details">
                    <h2>{name}</h2>
                    <div className="res_details_inside">
                        <div className="res_d_i_i">
                            <h3>* {avgRating} ({totalRatingsString}) - {costForTwoMessage}</h3>
                            <h5 className='theme_accent'>{cuisines.join(', ')}</h5>
                            <h5>{sla?.slaString}</h5>
                        </div>
                    </div>
                </div>
                <div className="resmenu_recomended">
                    <h4>Recommended({itemCards.length})</h4>
                    <div className="resmenu_div">
                        {itemCards.map((it)=>(<ResMenuItems menuInfo = {it?.card?.info} key={it?.card?.info?.id}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResMenu;