import {useState} from "react";
import {CardImageLink} from "../utils/constant.js";
import {p} from "caniuse-lite/dist/lib/supported.js";

const ResMenuItems = (props) => {

    const{menuInfo} = props;

    const descFull = menuInfo?.description;
    const descSub = `${menuInfo?.description?.substring(0,135)}  `
    const[mlBtn , setmlBtn] = useState('more');
    const[resDesc , setResDesc] = useState(descSub);

   const handleSpan = () =>{
       (mlBtn === 'more')?setmlBtn('less'):setmlBtn('more');
       (resDesc === descSub)? setResDesc(descFull) : setResDesc(descSub);
   }


    return(


       <div className="resitems_outside">
             <div className="resitems_des">
                <h4>{menuInfo?.name}</h4>
                 <h4>Rs.{menuInfo?.price/100}</h4>
                 <h5 className='resitems_aggregated'>{

                     (menuInfo?.ratings?.aggregatedRating?.rating !== undefined) ?   ('*'+
                        menuInfo?.ratings?.aggregatedRating?.rating+`(${menuInfo?.ratings?.aggregatedRating?.ratingCountV2})`):""

                 }</h5>
                 {
                     (resDesc)?(<p className='resItem_des_diff'>{resDesc}
                         <span id='resItem_span' onClick={handleSpan}>...{mlBtn}</span>
                     </p>):(<p></p>)
                 }

             </div>
           <div className="resitems_img">
               <div className="resitems_img_inside">
                   <img src={CardImageLink.concat(menuInfo?.imageId)}/>
               </div>
               <button className='resitems_Btn'>Add</button>
           </div>
       </div>
    )
}

export default ResMenuItems;