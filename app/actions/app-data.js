import { getUsers } from '../http.client';

function fetchingData() {
    return {
        type: 'FETCHING_DATA'
    };
}

function receivedData(data) {
    return {
        type: 'RECEIVED_DATA',
        data: data.users
    };
}

export function fetchData() {
    return function (dispatch) {
        dispatch(fetchingData());

        return getUsers()
            .then(users => dispatch(receivedData(users)));
    };
}