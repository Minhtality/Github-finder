import React, { Component } from 'react';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const {
            email,
            avatar_url,
            name,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable } = this.props.user;
        const { loading } = this.props;
        return (
            <div>
                <ul>
                    <li>{email}</li>
                    <li>{name}</li>
                </ul>
            </div>
        )
    }
}

export default User
