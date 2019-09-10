import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search Users
    const loadUsers = async () => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })

    }
    // api search state
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })

    }

    //Get single user state
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })

    }

    //get repos

    //clear users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });
    //set loading
    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    }

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        loadUsers,
        getUser
    }}>
        {props.children}
    </GithubContext.Provider >
}

export default GithubState