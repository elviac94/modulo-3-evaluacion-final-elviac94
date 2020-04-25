import React from "react";
import PropTypes from 'prop-types';

const CharacterCard = (props) => {

    return (
        <div className="charactercard__secondcontainer">
            <div className="charactercard__container--image">
                <img src={props.image} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.species}</h3>
        </div>
    );
};

CharacterCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
}

export default CharacterCard;
