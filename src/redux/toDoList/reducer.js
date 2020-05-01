import actions from './actions';
import { getToDoFromeLocalStorage } from '../../Helpers/utility';

const initialEntities = getToDoFromeLocalStorage();
const today = new Date().getDay(); // Returning today number

const initState = {
  entities: initialEntities,
  currentDay : today,
  modalVisible : false,
  searchValue : '',
};

export default function listReducer(state = initState, action) {
  switch (action.type) {
    case actions.LIST_REFRASH: {
      const { key, list } = action.data;
        return {
            ...state,
            entities :  {
              ...state.entities,
              [key] :list,
            },
        };
    }

    case actions.CURRENT_VALUE_REFRESH: {
      return {
          ...state,
          currentDay : action.data,
      };
  }
  case actions.MODAL_VISIBLE: {
    return {
        ...state,
        modalVisible : action.data,
    };
  }
  case actions.SEARCH_VALUE_REFRASH: {
    return {
        ...state,
        searchValue : action.data,
    };
  }
    default:
      return state;
  }
}
