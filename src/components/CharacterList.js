import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList=(props)=>{
 const dataList= props.dataList
    return(
        <ul className="characterlist__container">
            {dataList
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