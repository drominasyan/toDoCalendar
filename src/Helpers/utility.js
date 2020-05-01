import { statuses } from './constants';

//Updating locaStorage
export function storeToDoInStorage(key, clonedList) {
    const entities = JSON.parse(localStorage.getItem('entities')) || {};
    entities[key] = [...clonedList];
    return localStorage.setItem('entities', JSON.stringify(entities));
}

//Getting To-Do from localStorage
export function getToDoFromeLocalStorage() {
    const rawSettings = localStorage.getItem('entities');
    return JSON.parse(rawSettings) || {};
}


// Generating days from Apr 1 to 30
export const generateCalendarDates = () => {
    const data = [];
    for (let i = 1; i <= 30; i++) {
        data.push({
            key : i,
            value : `04.2020.${i}` });
        }
    return data;
};

//Calculating count of to To-Do and complated counts based on day
export const calculateToDoPropertiesByDay = (entities, key) => {
    const list = entities[key] || [];
    const count  = list.length;
    const incomplateCount = list.filter(item => item.status === statuses.Incomplate).length;
    return { count, incomplateCount };
};

//Calculating count of to To-Do and complated counts
export const calculateToDoProperties = (entities) => {
    const list = [];
    Object.keys(entities).forEach(item => {
        list.push(...entities[item]);
    });
    const count = list.length;
    const incomplateCount = list.filter(item => item.status === statuses.Incomplate).length;
    return `${count} to do items (${incomplateCount} of which incomplate)`;
};

//Calculating count of to To-Do and complated counts
export const searchByTitle = (entities, value) => {
    const list = [];
    Object.keys(entities).forEach(item => {
        list.push(...entities[item]);
    });
    const incomplateCount = list.find(item => item.title.includes(value));
    // Returning the first finded value
    return incomplateCount ? [{ ...incomplateCount }] : [];
};
