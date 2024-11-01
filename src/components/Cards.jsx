import React, {useState} from "react";
import {CardImageLink} from '../utils/constant.js';

const Cards = (props) => {



    return(
        <div className="fa_card">
            <div className="fa_card_img">
                <img alt='fa-image' src={CardImageLink.concat(props?.resData?.cloudinaryImageId)}/>
            </div>
            <h3>{props?.resData?.name} </h3>
            <h5>{props?.resData?.cuisines.join(', ')}</h5>
            <h4>{props?.resData?.costForTwo}</h4>
            <div className="fa_card_ratings">
                <h5 className='theme_accent'>{props?.resData?.avgRating} ⋆ </h5><h5>{props?.resData?.sla?.deliveryTime}  minutes</h5>
            </div>
        </div>
    )
}


export default Cards;
