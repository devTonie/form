import React from 'react';

const SocialButton = (props) => {
    return <a
        id={props.id}
        style={props.style}
        href={props.href}
        target="_top"
    >
        {props.children}
    </a>
};

export default SocialButton;