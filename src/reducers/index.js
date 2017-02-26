import { combineReducers } from 'redux';
import DataReducer from './reducer_results';


const rootReducer = combineReducers({
    data: DataReducer
});

export default rootReducer;
