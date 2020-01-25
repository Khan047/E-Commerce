import React from 'react';
import {Link} from 'react-router-dom';

function Drop() {
    const tstyle= {
        color:"white",
        textDecoration:"none",
        justifyContent:"center"
        
    };
    return (
        <div className="dropdown">
            <span>Categories</span>
            <div className="dropdown-content" >
                <Link to="" style={tstyle}><p>Landscape Engineering</p></Link>
                <Link to="" style={tstyle}><p>Social Engineering</p></Link>
                <Link to="" style={tstyle}><p>Architecture</p></Link>
                <Link to="" style={tstyle}><p>UX/UI Design</p></Link>
                <Link to="" style={tstyle}><p>Machine Learning</p></Link>
                <Link to="" style={tstyle}><p>Cloud Computing</p></Link>
            </div>
        </div>
    )

}


export default Drop;