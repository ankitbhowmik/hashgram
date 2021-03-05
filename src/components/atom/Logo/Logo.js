import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = ({children, ...props}) => {
    return (
        <h1 {...props} className="a-logo">{children}</h1>
    )
}

Logo.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Logo
