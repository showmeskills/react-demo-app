import { mockTableData } from "../../__mock__/mockData";
import { rootReducer } from "../root-reducer";
import { configureStore } from "@reduxjs/toolkit";

describe("rootReducer", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
    });
  });

  it("should handle actions dispatched to tableReducer", () => {
    const mockData = mockTableData;
    store.dispatch({ type: "table/setTableItem", payload: mockData });
    const state: any = store.getState();
    expect(state.table.tableItem).toEqual(mockData);
  });
});
