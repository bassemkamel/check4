import React from 'react';

export default function Photo(props) {
    return (
        <div>
            <img src={props.src} width={props.imageWidth}/>
        </div>
    )
}