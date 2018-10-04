import React from 'react';

const Card = () => {
    return(  
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
                <img alt='Robot' src='https://robohash.org/test?200x200' />
                <div>
                    <h2>Hamza Robo</h2>
                    <p>hamzarobo@gmail.com</p>
                </div>
            </div>    
    );
}
export default Card;