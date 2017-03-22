import { getUserData } from '../http.client';
import Browsing from '../helpers/browsing';
const browsing = new Browsing();

function fetchingData() {
    return {
        type: 'FETCHING_DATA'
    };
}

function receivedData(data) {
    return {
        type: 'RECEIVED_DATA',
        data: data
    };
}

export function updateUser({ user, id }) {
    return {
        type: 'UPDATE_USER',
        user,
        id
    };
}

export function fetchData() {
    return function (dispatch) {
        dispatch(fetchingData());

        return getUserData()
            .then(users => {
                browsing.location = { path: '/main' };
                dispatch(receivedData(users[0]));
            });
    };
}
