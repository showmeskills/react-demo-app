import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import DemoTable from "../index";
import { configureStore } from "@reduxjs/toolkit";
import { TableState } from "../../../interface/DemoTable/Table.interface";
import { mockTableData } from "../../../__mock__/mockData";
import * as request from "../../../apis/TableItem";

const createMockStore = (initialState: TableState) => {
  return configureStore({
    reducer: {
      table: (state = initialState.table, action) => {
        switch (action.type) {
          case "table/setTableItem":
            return { ...state, tableItem: action.payload };
          default:
            return state;
        }
      },
    },
  });
};

describe("DemoTable Component", () => {
  it("should fetch data on mount and dispatch setTableItem", async () => {
    jest
      .spyOn(request, "requestTableItem")
      .mockResolvedValue(Promise.resolve({ data: mockTableData }) as any);
    const store = createMockStore({ table: { tableItem: [] } });

    render(
      <Provider store={store}>
        <DemoTable />
      </Provider>
    );

    await waitFor(() => {
      expect(store.getState().table.tableItem).toHaveLength(5);
    });
  });

  it("should fetch data on mount and dispatch setTableItem but api error", async () => {
    jest
      .spyOn(request, "requestTableItem")
      .mockResolvedValue(Promise.reject({ data: [] }) as any);
    const store = createMockStore({ table: { tableItem: [] } });

    render(
      <Provider store={store}>
        <DemoTable />
      </Provider>
    );

    await waitFor(() => {
      expect(store.getState().table.tableItem).toHaveLength(0);
    });
  });
});
