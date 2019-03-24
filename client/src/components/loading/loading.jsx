import React from 'react';
import Loader from 'react-loaders'

import './loading.css';

const Loading = (props) => {

    let className = "loader";
    if (props.centered){
        className += " centered-loader"
    }

    return (
        <div style={{width: props.width, height: props.height}} className={className}/>
    )
}

export default Loading;
