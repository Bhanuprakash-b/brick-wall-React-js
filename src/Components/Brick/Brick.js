import React from 'react';

import "./style.css";

const Brick = (props) =>{
    console.log("prop is like",props);
    return(
        <div className="brick-cont">
            {
                props.name
            }
        </div>
    )
};
export default Brick ; 