import { createSlice } from "@reduxjs/toolkit";
import { TableItemStatus } from "../../interface/DemoTable/Table.interface";

export const INIT_TABLE_ITEM: TableItemStatus = {
    tableItem: [],
}


const tableSlice = createSlice({
    name: 'table',
    initialState: INIT_TABLE_ITEM,
    reducers: {
        setTableItem(state, action){
           state.tableItem = action.payload;
        }
    }
})

export const { setTableItem } = tableSlice.actions;

export const tableReducer = tableSlice.reducer;
