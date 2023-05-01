import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS =[
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter
    },
    {
        Header: 'Номер',
        Filter: ColumnFilter
    },
    {
        Header: 'Имя Фамилия',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Кличка',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Время',
        accessor: 'email',
        Filter: ColumnFilter
    },
    {
        Header: 'Балл 1',
        Filter: ColumnFilter
    },
    {
        Header: 'Балл 2',
        Filter: ColumnFilter
    },
    {
        Header: 'Общий балл',
        accessor: 'date_of_birth',
        Filter: ColumnFilter
    }
]