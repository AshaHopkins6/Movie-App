import React from "react";

const SearchBox = (props) => {
    return(
        <div className = 'col col-sm-4'>
            <input 
                claseName='form-control' 
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="Type to Search..."
            ></input>
        </div>
    )
}

export default SearchBox;