import { configureStore } from "@reduxjs/toolkit";
import { tableReducer, setTableItem } from "../../table/table.reducer";
import { mockTableData } from "../../../__mock__/mockData";

describe("tableSlice", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        table: tableReducer,
      },
    });
  });

  it("should return the initial state", () => {
    const state: any = store.getState();
    expect(state.table.tableItem).toEqual([]);
  });

  it("should handle setTableItem action", () => {
    const newTableItems = mockTableData;

    store.dispatch(setTableItem(newTableItems));

    const state: any = store.getState();
    expect(state.table.tableItem).toEqual(newTableItems);
  });
});
