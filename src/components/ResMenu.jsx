import {useState , useEffect} from 'react';
import FakeUI from "./FakeUI.jsx";
import ResMenuItems from "./ResMenuItems";
import ResMenuHandler from "./ResMenuHandler";


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
    const cardRecom = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const card99  = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    const card139 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    const card169 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    const cardCMD = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
    const cardCST = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card;
    const card8 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card;
    const card9 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card;
    const card10 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card;
    const card11 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[11]?.card?.card;
    // const card12 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card?.card;
    // const card13 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card;
    // const card14 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[14]?.card?.card;
    // const card15 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[15]?.card?.card;



    const cardArr = [
        cardRecom , card99 , card139 , card169 , cardCMD , cardCST , card8, card9, card10 , card11,
    ];

    const newArr = cardArr.map((i) => i);
    console.log("arr is the " , newArr);

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
                {
                    // <ResMenuHandler itemCards={cardRecom.itemCards} title={cardRecom.title} />
                    cardArr.map((i) => <ResMenuHandler itemCards={i.itemCards}  title={i.title} />)
                }
            </div>
        </div>
    )
}

export default ResMenu;