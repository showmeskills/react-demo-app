import { TableItem } from "./Table.interface";


export type SelectedItemStatus = Pick<TableItem, 'properties' | 'guid'> | null;

export interface SelectedItemProps {
    currentItem: SelectedItemStatus;
}
