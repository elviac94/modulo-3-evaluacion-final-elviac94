import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    const { dataList, inputValue } = props

    const foundCharacter = !dataList.length ? <h3 className="text-input-error">No hay ningún personaje que coincida con la palabra {inputValue}</h3> : ''

    return (
        <div>
            {foundCharacter}
            <ul className="characterlist__container">
                {dataList
                    .sort((a, b) => {
                        if (a.name < b.name) { return -1; }
                        if (a.name > b.name) { return 1; }
                        return 0;
                    })
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

