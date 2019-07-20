import React from 'react'
import VoteCard from '../votecard/VoteCard';
import './VoteCardContainer.style.css';
const VoteCardContainer = ({restaurants}) => {
    return (
        <div className="votecardcontainer-grid">
            {
                restaurants.map((restaurant, index) => <VoteCard key={index} name={restaurant.name} img={restaurant.img} description={restaurant.description} />)
            }
        </div>
    )
}

export default VoteCardContainer;