import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

//loops through repos => and then output each repo
const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}


// proptypes
Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
