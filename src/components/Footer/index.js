import React from 'react';

const Footer = ({footer, fecha}) => {
    return (
        <div>
            <p>{footer} {fecha}</p>
        </div>
    )
}

export default Footer;