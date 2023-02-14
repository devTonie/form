import React from 'react';

import '../styles.css';

const Button = (props) => {
    return <button
     id={props.id}
     type={props.type}
     onClick={props.onClick}
     style={props.style}
    >
        {props.children}
    </button>
};

export default Button;