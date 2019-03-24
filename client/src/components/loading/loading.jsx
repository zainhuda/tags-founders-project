import React from 'react';
import Loader from 'react-loaders'

import './loading.css';

const Loading = (props) => {
    return (
        <div style={{width: props.width, height: props.height}} class="loader"></div>
    )
}

export default Loading;
