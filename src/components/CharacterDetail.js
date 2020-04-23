import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
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
                <span className="characterdetail--status">status: {props.characterItem.status}</span>
                <span className="characterdetail--species">species: {props.characterItem.species}</span>
                <span className="characterdetail--origin">origin: {props.characterItem.origin.name}</span>
                <span className="characterdetail--episodes">episodes: {props.characterItem.episode.length}</span>
            </div>
        </div>
    )
}
export default CharacterDetail;