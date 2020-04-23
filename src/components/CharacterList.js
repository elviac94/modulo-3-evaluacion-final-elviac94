import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList=(props)=>{
 const {dataList, inputValue}= props
    return(
        <ul className="characterlist__container">
            {dataList
            .filter(characterItem => inputValue === "" || characterItem.name.toLowerCase().includes(inputValue.toLowerCase()) )
            .map(characterItem =>
                <li className="charactercard__firstcontainer" key={characterItem.id}>
                    <Link className="link" to={`character/${characterItem.id}`}>
                    <CharacterCard
                    image={characterItem.image}
                    name={characterItem.name}
                    species={characterItem.species}
                    />
                    </Link>
                </li>
                )}

        </ul>
    )
}
export default CharacterList;