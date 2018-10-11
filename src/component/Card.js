import React from 'react';

const Card = ({name, email, id}) => {
    return(  
            <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-s'>
                <img alt='Robot' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2 className='mid-gray'>{name}</h2>
                    <p className='light-silver'>{email}</p>
                </div>
            </div>    
    );
}
export default Card;