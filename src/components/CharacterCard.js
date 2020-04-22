import React from 'react';

const CharacterCard = (props) => {
    return (
        <div className="charactercard__secondcontainer">
            <div className="charactercard__container--image">
                <img src={props.image} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.species}</h3>
        </div>

    )
}
export default CharacterCard;