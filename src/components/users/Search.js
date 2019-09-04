import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Search extends Component {
    // state for text value 
    state = {
        text: '',
        // email: ''

    }
    //onChange event handler to grab value
    onChange = (event) => {
        // event.target.name -> use when you want to target multiple form inputs
        this.setState({ [event.target.name]: event.target.value })

    }
    //onSubmit
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.triggerAlert('Search field cannot be empty', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }
    render() {
        return (
            <div>
                {/* form with input and submit */}
                <form className="form" onSubmit={this.onSubmit} >
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    {/* <input type="text" name="email" placeholder="Search Email" value={this.state.email} onChange={this.onChange} /> */}
                    <input type="submit" className="btn btn-dark btn-block" value="Search!" />
                </form>
                {this.props.showClear &&
                    <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear!</button>
                }

            </div>
        )
    }
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    triggerAlert: PropTypes.func.isRequired,
};
export default Search
