import React from 'react';

const CharacterDetail = (props) => {
    return (
        <li className="characterdetail__container" id={props.characterItem.id}>
            <div className="characterdetail__container--image">
                <img src={props.characterItem.image} alt={props.characterItem.name} />
            </div>
            <div className="characterdetail__container--info">
                <h2 className="characterdetail--name">{props.characterItemname}</h2>
                <span className="characterdetail--status">status: {props.characterItem.status}</span>
                <span className="characterdetail--species">species: {props.characterItem.species}</span>
                <span className="characterdetail--origin">origin: {props.characterItem.origin.name}</span>
                <span className="characterdetail--episodes">episodes: {props.characterItem.name}</span>
            </div>

        </li>
    )
}
export default CharacterDetail;