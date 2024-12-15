export interface TableItem {
    guid: string;
    name: string;
    path: string[];
    properties: {
        [key: string]: string
    };
}

export interface TableItemStatus {
    tableItem: TableItem[];
}

export interface TableState {
    table: TableItemStatus;
}


