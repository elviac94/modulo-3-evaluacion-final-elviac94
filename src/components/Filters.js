import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {

    const getInputValue = (event) => {
        const value = event.target.value;
        props.handleInput(value)
    }
    
    const getGender=(event)=>{
        const idGender= event.currentTarget.id
        props.handleGender(idGender)
    }

    const preventDefault = (event) => event.preventDefault()

    return (
        <form onSubmit={preventDefault}>
            <label htmlFor="title"></label>
            <input
                placeholder="Name"
                type="text"
                id="title"
                name="title"
                value={props.inputValue}
                onChange={getInputValue}
            />
            <label htmlFor="Female"> Female
                <input
                type="checkbox"
                id="Female"
                value={props.isFemale}
                onChange={getGender}
                />
            </label>

            <label htmlFor="Male"> Male
                <input
                type="checkbox"
                id="Male"
                value={props.isMale}
                onChange={getGender}
                />
            </label>
        </form>
    )
};

Filters.propTypes = {
    inputValue: PropTypes.string
}

export default Filters;