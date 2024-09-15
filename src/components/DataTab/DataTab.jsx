import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DataTab = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(1);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const productData = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            description: 'Product Description',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        // Add more items if needed
    ];

    const [tableData, setTableData] = useState(productData);

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    return (
        <div className='m-16'>
            <div className="border border-gray-200 rounded-3xl p-4">
                <DataTable 
                    value={tableData} 
                    tableStyle={{ minWidth: '50rem' }}
                    paginator 
                    first={first} 
                    rows={rows} 
                    totalRecords={tableData.length} 
                    onPageChange={onPageChange}
                >
                    {columns.map((col) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
        </div>
    );
}

export default DataTab;
