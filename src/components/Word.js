import React from 'react';

const Word = (props) => {
    return (
        <div>
            {
                isNaN(props.value) ? <h1>{props.value}: What a word!</h1> : <h1> {props.value} is mathematical! </h1>
            }
        </div>
    )
}

export default Word;