import React from 'react'
import Vote from '../voteoptions/VoteOptions'
import './VoteCard.style.css';
import VoteOptions from '../voteoptions/VoteOptions';
const VoteCard = ({name, description, img}) => {
    return(
        <div className="box" style={{backgroundImage: `url(${img})`}}>
            <div className="content">
                <h1>{name}</h1>
                <strong>{description}</strong>
            </div>
            <VoteOptions />
        </div>
    )
}

export default VoteCard;