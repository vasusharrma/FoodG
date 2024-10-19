import React from "react";
import {CardImageLink} from '../utils/constant.js';

const Cards = (props) => {

    console.log(props);
//
//     return(
//         <div className="fa_card">
//             <div className="fa_card_img">
//                 <img alt='fa-image' src={CardImageLink.concat(props.cloudinaryImageId)}/>
//             </div>
//             <h3>{props.name} </h3>
//             <h5>{props.cuisines.join(', ')}</h5>
//             <h4>₹{props.costForTwo}</h4>
//             <div className="fa_card_ratings">
//                 <h5 className='theme_accent'>{props.avgRating} ⋆ </h5><h5>{props.maxDeliveryTime}  minutes</h5>
//             </div>
//         </div>
//     )
}

export default Cards;
