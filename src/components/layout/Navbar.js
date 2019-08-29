import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
                <ul>
                    <li><a get='#'>Home</a></li>
                    <li><a get='#'>About</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
