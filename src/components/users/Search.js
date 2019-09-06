import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ clearUsers, showClear, triggerAlert, searchUsers }) => {
    //set state for text value 
    const [text, setText] = useState('');

    //onChange event handler to grab value
    const onChange = (event) => {
        // event.target.name -> use when you want to target multiple form inputs
        setText(event.target.value)

    }
    //onSubmit
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            triggerAlert('Search field cannot be empty', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    }
    return (
        <div>
            {/* form with input and submit */}
            <form className="form" onSubmit={onSubmit} >
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
                {/* <input type="text" name="email" placeholder="Search Email" value={this.state.email} onChange={this.onChange} /> */}
                <input type="submit" className="btn btn-dark btn-block" value="Search!" />
            </form>
            {showClear &&
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear!</button>
            }

        </div>
    )

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    triggerAlert: PropTypes.func.isRequired,
};
export default Search
