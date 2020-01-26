import React from 'react';
import './App.css';
import Main from './main';
import PostList from './postlist';

function Category(props) {
  return (
    <div className="App">
     {/* <Main/> */}
     <PostList {...props} handleitem={props.handleItem}/>
     
    </div>
  );
}

export default Category;