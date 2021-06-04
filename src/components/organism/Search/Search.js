import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";

import { Triangle } from '../Notification/Notification.style';
import { SearchBox } from './Search.style';
import People from "../../molecule/People/People";
import { Hoverable } from '../../template/Message/Message.style';
import { useHistory } from 'react-router';

const Search = ({ show }) => {
    const history = useHistory();
    const { search: people, searchLoading } = useSelector(state => state.user);

    return (
        show ? (
            <SearchBox>
                <Triangle right="150px" />
                {
                    searchLoading
                        ? <h1>loading...</h1>
                        : people.length !== 0
                            ? people.map((pep, index) => (<Hoverable key={index}>
                                <People
                                    name={pep.fullname}
                                    username={pep.email}
                                    image={pep.profileImage}
                                    onClick={() => history.push(`/acc/profile/${pep._id}`)}
                                />
                            </Hoverable>))
                            : <h1>No result found</h1>
                }
            </SearchBox>
        ) : null
    )
}

Search.propTypes = {
    show: PropTypes.bool.isRequired,
}

export default Search
