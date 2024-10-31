import {useState} from "react";
import {CardImageLink} from "../utils/constant.js";

const ResMenuItems = ({menuInfo , key}) => {

    const descFull = menuInfo?.description;
    const descSub = `${menuInfo?.description.substring(0,135)}  `
    const[mlBtn , setmlBtn] = useState('more');
    const[resDesc , setResDesc] = useState(descSub);

   const handleSpan = () =>{
       (mlBtn === 'more')?setmlBtn('less'):setmlBtn('more');
       (resDesc === descSub)? setResDesc(descFull) : setResDesc(descSub);
   }

    console.log("menuInfo", menuInfo);
    console.log("desc is " , resDesc);

    return(


       <div className="resitems_outside">
             <div className="resitems_des">
                <h4>{menuInfo?.name}</h4>
                 <h4>Rs.{menuInfo?.price/100}</h4>
                 <p className='resItem_des_diff'>{resDesc}
                     <span id='resItem_span' onClick={handleSpan}>...{mlBtn}</span>
                 </p>
             </div>
           <div className="resitems_img">
               <div className="resitems_img_inside">
                   <img src={CardImageLink.concat(menuInfo?.imageId)}/>
               </div>
           </div>
       </div>
    )
}

export default ResMenuItems;