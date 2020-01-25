import React from  'react';

import "./card-style.css"
const Card = props =>{

    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary text-light">
                    <button className="Button1">ADD TO CART</button>
                   {/* <a href="#"> <FaLongArrowAltUp /> </a> {props.upvotes}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}  <a href="#"><FaEye/></a>  {props.views}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}  <a href="#"><FaCommentAlt/>   </a>{props.comments} */}
                </p> 
                    {/* <a href="#" className="btn btn-outline-success">Go anywhere</a> */}
            </div>
        </div>

    );
}
export default Card