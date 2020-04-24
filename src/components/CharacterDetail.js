import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWalking, faSkullCrossbones, faHeartbeat  } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien,  } from '@fortawesome/free-brands-svg-icons';

const CharacterDetail = (props) => {
    const Specie= props.characterItem.species === 'Human' ? <FontAwesomeIcon icon={ faWalking}/> : <FontAwesomeIcon icon={faRedditAlien}/>
    
    const isAlive= props.characterItem.status ==='Alive'? <FontAwesomeIcon icon={ faHeartbeat}/> : <FontAwesomeIcon icon={ faSkullCrossbones}/>
    
    return (
        <div className="characterdetail__container" >
            <Link to='/'>
                <button>Volver</button>
            </Link>
            <div className="characterdetail__container--image">
                <img src={props.characterItem.image} alt={props.characterItem.name} />
            </div>
            <div className="characterdetail__container--info">
                <h2 className="characterdetail--name">{props.characterItemname}</h2>
                <span className="characterdetail--status">status: {isAlive}</span>
                <span className="characterdetail--species">species: {Specie}</span>
                <span className="characterdetail--origin">origin: {props.characterItem.origin.name}</span>
                <span className="characterdetail--episodes">episodes: {props.characterItem.episode.length}</span>
            </div>
        </div>
    )
}
export default CharacterDetail;