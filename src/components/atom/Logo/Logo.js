import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = ({children}) => {
    return (
        <h1 className="a-logo">{children}</h1>
    )
}

Logo.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Logo
