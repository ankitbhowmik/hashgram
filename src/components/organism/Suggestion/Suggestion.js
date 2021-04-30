import React from 'react';
import PropTypes from 'prop-types';
import People from '../../molecule/People/People';
import { H1 } from '../../atom/Text/Text';

const button = {
    name: "follow"
}
const Suggestion = ({people}) => {
    return (
        <>
            <H1 color="gray" size={20}>Suggestions for you </H1>
            {
                people.map(({image, name, username}, index)=> (
                    <People key={index} image={image} name={name} username={username} button={button}/>
                ))
            }
        </>
    )
}

Suggestion.propTypes = {
    people: PropTypes.array
}

export default Suggestion
