import ResMenuItems from "./ResMenuItems.jsx";
import {useState} from "react";

const ResMenuHandler = (props) => {


    const[toRotate , setToRotate] = useState('')
    const[displayRecom , setDisplayRecom] = useState("");

    const{itemCards,title} = props;


    const handleRecom = () => {
        (toRotate === '')?(setToRotate('rotate')):(setToRotate(''));
        (displayRecom === "")?(setDisplayRecom('inactive')):(setDisplayRecom(""));
    }


    return (
        <div className="resmenu_recomended">
            <div className="resmenu_recomended_second">
                <h4>{title}({itemCards.length}) </h4>
                <p className={`resmenu_clope ${toRotate}`} onClick={handleRecom}>^</p>
            </div>
            <div className={`resmenu_div ${displayRecom}`}>

                {itemCards.map((it) => (<ResMenuItems    menuInfo={it?.card?.info} key={it?.card?.info?.id}/>))}
            </div>
            <div className={`resmenu_line`}></div>
        </div>
    )
}


export default ResMenuHandler;