import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien, } from '@fortawesome/free-brands-svg-icons';

const CharacterCard = (props) => {

    const Specie = props.species === 'Human' ? <FontAwesomeIcon icon={faWalking} /> : <FontAwesomeIcon icon={faRedditAlien} />

    return (
        <div className="charactercard__secondcontainer">
            <div className="charactercard__container--image">
                <img src={props.image} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <h3>{Specie}</h3>
        </div>

    )
}
export default CharacterCard;