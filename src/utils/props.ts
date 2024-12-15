import { GridPaginationInitialState } from "@mui/x-data-grid-pro";

export const PaginationProps: GridPaginationInitialState = {
      paginationModel: {
        page: 0, 
        pageSize: 10 
      },
      rowCount: 10,
}

export const PaginationSizeProps = [
    5,
    10
]