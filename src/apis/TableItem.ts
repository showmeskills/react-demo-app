import { TableItem } from "../interface/DemoTable/Table.interface"
import request from "../utils/request"
import { API_ENDPOINTS } from "./apit-endpoint"

export const requestTableItem = () => {
    return request<TableItem[]>(API_ENDPOINTS.getTableItem, {
        method: 'GET',
    })
}