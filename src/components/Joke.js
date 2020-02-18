import React from 'react';

const Joke = (props) => {
    return (
        <div className="joke-modal-content" onClick={props.anotherJoke}>
            <span>{props.joke}</span>
        </div>
    );
};

export default Joke;
