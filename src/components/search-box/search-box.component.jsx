import React from 'react'; 

import './search-box.styles.css'; 


export const SearchBox = ({placeholder, handleChange}) => (
    <input type="search" 
    placeholder='search monsters' 
    onChange={e=> this.setState({searchField: e.target.value}, () => console.log(this.state))}></input>
     
);