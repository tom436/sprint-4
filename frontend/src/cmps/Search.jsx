
import React from 'react';


export function Search({ handleSubmit, handleChange, value, isHome }) {

    return (
        <form className={`search-form ${isHome}`} onSubmit={handleSubmit}>
            <input className="search" name="searchValue" type="text" placeholder="Search products" onChange={handleChange} value={value} />
            <button className="fas fa-search search-btn"></button>
        </form>
    )
}
