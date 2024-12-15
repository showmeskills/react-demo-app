import { ListItem } from "../interface/DemoTable/Table.interface"
import request from "../utils/request"
import { API_ENDPOINTS } from "./apit-endpoint"

export const requestListItem = () => {
    return request<ListItem[]>(API_ENDPOINTS.getListItem, {
        method: 'GET',
    })
}