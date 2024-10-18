import React from "react";
import {CardImageLink} from '../utils/constant.js';

const Cards = (props) => {
    console.log("I am inside the function");

    return(
        <div className="fa_card">
            <div className="fa_card_img">
                <img alt='fa-image' src={CardImageLink.concat(props.resData.data.cloudinaryImageId)}/>
            </div>
            <h3>{props.resData.data.name} </h3>
            <h5>{props.resData.data.cuisines.join(', ')}</h5>
            <h4>₹{props.resData.data.costForTwo/100} FOR TWO</h4>
            <div className="fa_card_ratings">
                <h5 className='theme_accent'>{props.resData.data.avgRating} ⋆ </h5><h5>{props.resData.data.maxDeliveryTime}  minutes</h5>
            </div>
        </div>
    )
}

export default Cards;
