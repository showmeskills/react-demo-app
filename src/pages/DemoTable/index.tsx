import { useEffect, useState } from "react";
import { requestTableItem } from "../../apis/TableItem";
import { useDispatch, useSelector } from "react-redux";
import { tableItemSelector } from "../../store/table/table.selector";
import { setTableItem } from "../../store/table/table.reducer";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { PaginationProps, PaginationSizeProps } from "../../utils/props";
import { TableItem } from "../../interface/DemoTable/Table.interface";
import Grid from "@mui/material/Grid2";
import ImageComponent from "../components/ImageComponent";
import SelectedItem from "./SelectedItem";
import { SelectedItemStatus } from "../../interface/DemoTable/SelectedItem.interface";

const DemoTable = () => {
  const selectListIitem = useSelector(tableItemSelector);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItemStatus>(null);
  const initData = async () => {
    try {
      setLoading(true);
      const result = await requestTableItem();
      dispatch(setTableItem(result?.data || []));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  const columns: GridColDef<TableItem>[] = [
    {
      field: "guid",
      headerName: "GUID",
      align: "center",
      headerAlign: "center",
      display: "flex",
      width: 120,
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
      display: "flex",
      width: 120,
    },
    {
      field: "path",
      headerName: "Path",
      align: "center",
      headerAlign: "center",
      display: "flex",
      width: 120,
      renderCell: (params) => {
        return <>{params.row?.path.join("/") || ""}</>;
      },
    },
    {
      field: "properties",
      headerName: "Properties",
      width: 300,
      align: "center",
      headerAlign: "center",
      display: "flex",
      renderCell: (params) => {
        const properties = params.row?.properties || {};
        return (
          <Grid
            container
            spacing={2}
            justifyContent={"space-between"}
            padding={2}
          >
            <Grid size={6}>propString</Grid>
            <Grid size={6}>{properties?.propString}</Grid>
            <Grid size={6}>propNumber</Grid>
            <Grid size={6}>{properties?.propNumber}</Grid>
            <Grid size={6}>date</Grid>
            <Grid size={6}>{properties?.date}</Grid>
          </Grid>
        );
      },
    },
    {
      field: "-",
      headerName: "Image",
      align: "center",
      headerAlign: "center",
      display: "flex",
      width: 120,
      renderCell: (params) => {
        return (
          <ImageComponent
            src={`http://localhost:8080/image/${params.row?.guid}`}
            alt={params.row?.guid}
            size={{ width: 100, height: 60, objectFit: "cover" }}
          />
        );
      },
    },
  ];

  const onRowClick = (params: { row: TableItem }) => {
    const row = params.row;
    setSelectedItem({
        properties: row.properties,
        guid: row.guid
    })
  };

  return (
    <Paper>
      <Grid container spacing={10}>
        <Grid size={6}>
          <DataGrid<TableItem>
            rows={selectListIitem}
            columns={columns}
            initialState={{
              pagination: PaginationProps,
            }}
            pageSizeOptions={PaginationSizeProps}
            sx={{ border: 0 }}
            loading={loading}
            getRowHeight={() => "auto"}
            onRowClick={onRowClick}
          />
        </Grid>
        <Grid size={6}>
          <SelectedItem currentItem={selectedItem} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DemoTable;
