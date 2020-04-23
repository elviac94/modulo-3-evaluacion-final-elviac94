import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    const { dataList, inputValue } = props
    const foundCharacter = dataList.length === 0 ? <h3>No hay ningún personaje que coincida con la palabra {inputValue}</h3> :''
    return (
        <div>
            {foundCharacter}
        <ul className="characterlist__container">
            {dataList
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
        </div>
    )
}
export default CharacterList;

