import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faSkullCrossbones, faHeartbeat, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien, } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
    const { image, name, status, species, origin, episode } = props.characterItem;

    const Specie = species === 'Human' ? <FontAwesomeIcon className="walking" icon={faWalking} /> : <FontAwesomeIcon className="alien" icon={faRedditAlien} />

    const isAlive = status === 'Alive' ? <FontAwesomeIcon className="heart" icon={faHeartbeat} /> :
        status === 'unknown' ? <FontAwesomeIcon className="unknown" icon={faUserSecret} /> : <FontAwesomeIcon className="skull" icon={faSkullCrossbones} />

    return (
        <div>
            <Header />
            <div className="characterdetail__container" >
                <div className="characterdetail__container--image">
                    <img src={image} alt={name} />
                </div>
                <div className="characterdetail__container--info">
                    <Link className="button-link" to='/'>
                        <button className="back-button"> Go back </button>
                    </Link>
                    <h2 className="characterdetail--name">{name}</h2>
                    <span className="characterdetail--status">status: {isAlive}</span>
                    <span className="characterdetail--species">species: {Specie}</span>
                    <span className="characterdetail--origin">origin: {origin.name}</span>
                    <span className="characterdetail--episodes">episodes: {episode.length}</span>
                </div>
            </div>
        </div>
    )
};
CharacterDetail.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episode: PropTypes.array,
}
export default CharacterDetail;