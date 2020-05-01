import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {

    const getInputValue = (event) => {
        const value = event.target.value;
        props.handleInput(value)
    }
    
    const getGender=()=>{
        props.handleGender()
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
            <label htmlFor="female"> Female
                <input
                type="checkbox"
                id="female"
                value={props.isFemale}
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