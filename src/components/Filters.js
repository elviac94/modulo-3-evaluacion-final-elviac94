import React from 'react';

const Filters = (props) => {

    const getInputValue = (event) => {
        const value = event.target.value;
        props.handleInput(value)
    }

    const preventDefault = (event) => event.preventDefault()

    return (
        <form onSubmit={preventDefault}>
            <label htmlFor="title"></label>
            <input
                type="text"
                id="title"
                name="title"
                value={props.inputValue}
                onChange={getInputValue}
            />
        </form>
    )
}
export default Filters;