import React from 'react';
import Loader from 'react-loaders'

import './loading.css';

const DEFAULT_WIDTH = 60;
const DEFAULT_HEIGHT = 60;

const Loading = (props) => {

    let className = "loader";
    if (props.centered){
        className += " centered-loader"
    }

    return (
        <div style={{width: props.width || DEFAULT_WIDTH, height: props.height || DEFAULT_HEIGHT}} className={className}/>
    )
}

export default Loading;
