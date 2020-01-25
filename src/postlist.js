import React, { Component } from 'react';
import PostData from './data/products.json';
import Card from './cardUI'
import "./card-style.css"

class PostList extends Component{
// const sstyle={{display : "flex",
// justifyContent: "space-between",
// alignItems: "center"}};
    render(){
        return(
            <div>
            <h1>profducts go here</h1>
            {PostData.map((postdetail,index)=>{
                return <p >
                  

                    <div className="container-fluid d-flex justify-content-center" style={{ paddingTop: "100px" }}>
                        <div className="row">
                        <Card imgsrc={postdetail.url} title={postdetail.name} upvotes="100"  views="2000" comments="7"/>
                        </div>
                    </div>
                
                
                </p>
            })}
            
            </div>
        )

    }

}

export default PostList;