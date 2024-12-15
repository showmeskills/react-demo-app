
import { combineReducers } from 'redux';
import { tableReducer } from './table/table.reducer';

export const rootReducer = combineReducers({
    table: tableReducer
});
