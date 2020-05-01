/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToDoModal from '../../../components/StandardModal';
import toDoActions from '../../../redux/toDoList/actions';
import { addList, validateForm } from './utils';
import './styleModal.css';

const AddToDoModal = (props) =>  {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [success, setSuccess] = useState(false);

    const visibleChange = () => {
        const { modalVisibleRefrash } = props;
        modalVisibleRefrash(false);
    };

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        } else {
            setDescription(value);
        }
    };

    const addToDo = () => {
        const { listRefresh, list, currentDay } = props;
        const modalData = {
            title,
            description,
        };
        const errors = validateForm(modalData);
        if (!errors) {
            setSuccess('Success');
        } else {
            setSuccess('Faild. Pls add all required fuilds');
            return;
        }
        const newList = addList(list, currentDay, modalData);
        setTitle('');
        setDescription('');
        listRefresh(currentDay, newList);
    };

    const { currentDay } = props;

    return (
        <ToDoModal>
            <div className="popupBody">
                <h2>{`To Do List Due To Apr ${currentDay} 2020`}</h2>
                <input type="string" name="title" placeholder="Title" value={title} onChange = {onChangeValue} />
                <input type="string" name="description" placeholder="Description" value={description} onChange = {onChangeValue} />
                <div className="actions">
                    <button type="submit" className="add" onClick={addToDo}>Add</button>
                    <button type="submit" className="cancel" onClick={visibleChange}>Cancel</button>
                </div>
                {success && <p>{success}</p>}
            </div>
        </ToDoModal>
    );
};

AddToDoModal.propTypes = {
    listRefresh    : PropTypes.func.isRequired,
    list           : PropTypes.array.isRequired,
    currentDay   : PropTypes.number.isRequired,
};

function mapStateToProps(state) {
    const { listReducer } = state;
    const { currentDay } = listReducer;

    return {
        list : listReducer.entities[currentDay]  || [],
        currentDay,
    };
}

const mapDspatchToProps = {
    modalVisibleRefrash : toDoActions.modalVisibleRefrash,
    listRefresh         : toDoActions.listRefresh,
};

export default connect(mapStateToProps, mapDspatchToProps)(AddToDoModal);
