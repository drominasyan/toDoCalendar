import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai'; //SearchIcon
import { calculateToDoProperties, searchByTitle } from '../../Helpers/utility';
import searchActions from '../../redux/search/actions';
import './headerStyle.css';


const  Header  = (props) => {
	const { entities, history, searchValueRefrash, searchValue, searchListRefresh } = props;

	const searchToDo = () => {
		history.push('./toDoList');
	};

	const changeSearchValue = (e) => {
		const { value } = e.target;
		// Saveing value in redux for controled component (input)
		searchValueRefrash(value);
		const list = searchByTitle(entities, value);
		// Updating Search List on every change
		searchListRefresh(list);
	};

	return (
		<header className="header">
			<p>{calculateToDoProperties(entities)}</p>
			<div className="searchBlock">
				<input placeholder = "Search" value={searchValue} onChange={changeSearchValue} />
				<span onClick={searchToDo}><AiOutlineSearch /></span>
			</div>
		</header>
	);
};


// Checking Proptypes.
Header.propTypes = {
    entities  	 : PropTypes.object.isRequired,
    history  	 : PropTypes.object.isRequired,
    searchValue  : PropTypes.string.isRequired,
    searchValueRefrash  : PropTypes.func.isRequired,
    searchListRefresh  : PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { searchReducer : { searchValue }, listReducer : { entities } } = state;
    return {
		entities,
		searchValue,
    };
}

const mapDispatchToProps = {
	searchValueRefrash : searchActions.searchValueRefrash,
	searchListRefresh : searchActions.searchListRefresh,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
