import React from 'react';
import '../containers/App.css'; 

const SearchBox = ({searchField,searchChange}) => {
    return (
        <div className='ph6'>
            <input
                className='tc input-reset ba b--light-gray bg-light-gray pa3 mb2 db w-100 black-60 br-pill boutline'
                type='search'
                placeholder='Enter your Robot name'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;