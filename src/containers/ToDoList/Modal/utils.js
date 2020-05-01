import { storeToDoInStorage } from '../../../Helpers/utility';
import { statuses } from '../../../Helpers/constants';

export const addList = (list, currentDay, modalData) => {
    const { title, description } = modalData;
    const clonedList = [...list];
    const id = Math.random().toString(36).substr(2, 9);
    clonedList.push({
        id,
        title,
        description,
        status : statuses.Incomplate,
    });
    storeToDoInStorage(currentDay, clonedList);
    return clonedList;
};

export const removeList = (list, currentDay, id) => {
    const newList = list.filter(item => item.id !== id);
    storeToDoInStorage(currentDay, newList);
    return newList;
};

export const changeStatus = (list, currentDay, id) => {
    const clonedList = [...list];
    const findedItem = clonedList.find(item => item.id === id);
    findedItem.status = statuses.Complated;
    storeToDoInStorage(currentDay, clonedList);
    return clonedList;
};

export const validateForm = (data) => {
    let errors = false;
    if (!data.title || !data.description) {
        errors = true;
    }
    return errors;
};
