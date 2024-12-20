import { createSelector } from "@reduxjs/toolkit";
import { TableState } from "../../interface/DemoTable/Table.interface";

const tableState = (state: TableState) => state.table;

export const tableItemSelector = createSelector(tableState, item => item.tableItem?.map((item, index)=> ({
    ...item,
    id: index
})));