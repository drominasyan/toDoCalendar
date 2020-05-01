import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListTable from '../../components/ListTable/ListTable';
import AddToDoModal from './Modal';
import toDoActions from '../../redux/toDoList/actions';
import { removeList, changeStatus } from './Modal/utils';
import './toDoStyle.css';

const ToDoList = (props) =>  {

    const visibleChange = () => {
        const { modalVisibleRefrash } = props;
        modalVisibleRefrash(true);
    };

    const calendarPage = () => {
        const { history } = props;
        history.push('./homepage');
    };

    const removeItem = (e) => {
        const { id } = e.target.dataset;
        const { list, currentDay, listRefresh } = props;
        // eslint-disable-next-line no-alert
        const confirm = window.confirm('Are you sure you wont to DELETE');
        if (!confirm) {
            return;
        }
        const newList = removeList(list, currentDay, id);
        listRefresh(currentDay, newList);
    };

    const statusChange = (e) => {
        const { id } = e.target.dataset;
        const { list, currentDay, listRefresh } = props;
        // eslint-disable-next-line no-alert
        const confirm = window.confirm('Are you sure you wont to change status as COMPLATED');
        if (!confirm) {
            return;
        }
        const newList = changeStatus(list, currentDay, id );
        listRefresh(currentDay, newList);
    };

    const { modalVisible, currentDay, list, searchValue, searchList } = props;
    const enderedList = searchValue ? searchList : list;
    return (
        <div>
            <div className="pageHeader">
                <h2>{`TO DO LIST DUE TO APR ${currentDay} 2020`}</h2>
                <div>
                    <button type="button" className="pageBack" onClick = {calendarPage}>Back To Calendar</button>
                    <button type="button" className="AddButton" onClick = {visibleChange}>Add a new to-do</button>
                </div>
            </div>
            <ListTable
                list={enderedList}
                removeItem={removeItem}
                changeStatus={statusChange}
                searchValue = {searchValue}
            />
            {modalVisible && (<AddToDoModal />)}
        </div>
    );
};

ToDoList.propTypes = {
    modalVisibleRefrash : PropTypes.func.isRequired,
    listRefresh         : PropTypes.func.isRequired,
    modalVisible        : PropTypes.bool.isRequired,
    currentDay          : PropTypes.number.isRequired,
    list                : PropTypes.array.isRequired,
    searchList          : PropTypes.array.isRequired,
    history             : PropTypes.object.isRequired,
    searchValue         : PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    const { listReducer : { modalVisible, currentDay, entities }, searchReducer : { searchValue, searchList } } = state;
    return {
        modalVisible,
        currentDay,
        list : entities[currentDay] || [],
        searchValue,
        searchList,
    };
}

const mapDspatchToProps = {
    modalVisibleRefrash : toDoActions.modalVisibleRefrash,
    listRefresh : toDoActions.listRefresh,
};

export default connect(mapStateToProps, mapDspatchToProps)(withRouter(ToDoList));
