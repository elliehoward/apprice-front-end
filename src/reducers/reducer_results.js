import {
    STORE_DATA,
    STORE_LOCATION,
    STORE_USER,
    NUMBER_STORES,
    SAVE_LIST,
    ONE_STORE,
    TWO_STORE,
    THREE_STORE
} from '../actions/index';

const INITIAL_STATE = {
    list: {},
    location: {
        coords: {
            lat: 122,
            lng: 37
        }
    },
    user: {},
    stores: 2,
    oneStore: [],
    twoStore: [],
    threeStore: []
};

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload, 'Im the action');
    switch (action.type) {
        case STORE_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case STORE_USER:
            return {
                ...state,
                user: action.payload
            }
        case NUMBER_STORES:
            return {
                ...state,
                stores: action.payload
            }
        case SAVE_LIST:
            return {
                ...state,
                list: action.payload
            }
        case ONE_STORE:
            return {
                ...state,
                oneStore: action.payload.data
            }
        case TWO_STORE:
            return {
                ...state,
                twoStore: action.payload.data
            }
        case THREE_STORE:
            return {
                ...state,
                threeStore: action.payload.data
            };
        default:
            return state;
    }
}
