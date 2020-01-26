import React, { Component } from 'react';
import PostData from './data/products.json';
import Card from './cardUI'
import "./card-style.css"


// const sstyle={{display : "flex",
// justifyContent: "space-between",
// alignItems: "center"}};
 function PostList(props) {
     
 
    
        return(
            < div className="col">
            <h1>profducts go here</h1>
            
            {PostData.map((postdetail,index)=>{
                return <p >
                  

                    <div className="container-fluid d-flex justify-content-center" style={{ paddingTop: "100px" }}>
                        <div className="row">
                        <Card imgsrc={postdetail.url} title={postdetail.name} key={postdetail.id} imgid={postdetail.id} handleItem={props.handleItem}/>
                        </div>
                    </div>
                
                
                </p>
            })}
            
            </div>
        )

    

}

export default PostList;