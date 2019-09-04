import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';


const Users = ({ users, loading }) => {
    //bring in spinners
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle} className='grid-3'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }


}
//bring in proptypes
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

//
const userStyle = {
    gridGap: '0.2rem'
}

export default Users
