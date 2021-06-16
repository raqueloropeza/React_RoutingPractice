import React from 'react';


const Rainbow = (props) =>{
    return (
        <div>
                <div >
                    <h1 style={{color:`${props.text}`, backgroundColor: `${props.background}`}}>The word is: {props.word}. </h1>
                </div>
            </div>
    )
}

export default Rainbow;