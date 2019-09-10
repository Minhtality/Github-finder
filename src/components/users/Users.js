import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../context/github/GithubContext';


const Users = () => {
    //bring in githubContext
    const githubContext = useContext(GithubContext)
    //destructure users and loading
    const { loading, users } = githubContext;
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


// styles
const userStyle = {
    gridGap: '0.2rem'
}

export default Users
