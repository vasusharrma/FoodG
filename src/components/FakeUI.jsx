import React from "react";

const FakeUI = () => {


    return(
        <div className="fa_card  fui_card">
            <div className="fa_card_img fui">

            </div>
            <h3 className='fui'>props.resData</h3>
            <h5 className='fui'>props.resData..join(', ')</h5>
            <h4 className='fui'>props.resData.costForTwo</h4>
            <div className="fa_card_ratings">
                <h5 className='fui'>. ⋆ </h5>
                <h5 className='fui'>3 minutes</h5>
            </div>
        </div>
    )

}

export default FakeUI;