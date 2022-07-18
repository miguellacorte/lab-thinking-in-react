import React from 'react';
import { useState } from 'react'


function SearchBar (props) {

  console.log(props)

    return(
        <div>
        
        <form>
        <label> Search:</label>
        <input 
        type="text"
        value={props.search}
        placeholder="Search by name"
        name="input" 
        onChange = {(e)=> props.setSearch(e.target.value)}
        />
        </form>


        </div>    
    )
  }
  
  export default SearchBar 