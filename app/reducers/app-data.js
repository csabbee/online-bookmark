import { FETCHING_DATA, RECEIVED_DATA, ADD_ENTRY, UPDATE_LIST } from '../helpers/action-types';

const defaultState = {
    isFetching: false,
    lists: []
};

export default function appData(state = defaultState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                isFetching: true,
                lists: state.lists
            };
        case RECEIVED_DATA:
            return {
                isFetching: false,
                lists: action.data
            };
        case ADD_ENTRY:
            return {
                isFetching: false,
                lists: state.lists.map(list => {
                    if (list._id === action.listId) {
                        return Object.assign({}, list, { elements: list.elements.concat(action.link) });
                    } else {
                        return list;
                    }
                })
            };
        case UPDATE_LIST:
            return {
                isFetching: false,
                lists: state.lists.map(list => {
                    return list._id === action.list._id ? action.list : list;
                })
            };
        default:
            return state;
    }
}
