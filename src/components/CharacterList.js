import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList=(props)=>{
 const {dataList, inputValue}= props
    return(
        <ul className="characterlist__container">
            {dataList
            .filter(characterItem => inputValue === "" || characterItem.name.toLowerCase().includes(inputValue.toLowerCase()) )
            .map(characterItem =>
                <li className="charactercard__firstcontainer" key={characterItem.id}>
                    <CharacterCard
                    image={characterItem.image}
                    name={characterItem.name}
                    species={characterItem.species}
                    />
                </li>
                )}

        </ul>
    )
}
export default CharacterList;