import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
    //initiate github context 
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

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
            alertContext.setAlert('Search field cannot be empty', 'light');
        } else {
            githubContext.searchUsers(text);
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
            {githubContext.users.length > 0 &&
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear!</button>
            }

        </div>
    )

}


export default Search
