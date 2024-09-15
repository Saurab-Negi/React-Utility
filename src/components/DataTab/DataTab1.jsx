import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DataTab1 = () => {
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
    ];

    const [tableData, setTableData] = useState(productData);

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
                    <Column field="code" header="Code" style={{ width: '50px' }} />
                    <Column field="name" header="Name" style={{ width: '300px' }} />
                    <Column field="category" header="Category" style={{ width: '150px' }} />
                    <Column field="quantity" header="Quantity" style={{ width: '100px' }} />
                </DataTable>
            </div>
        </div>
    );
}

export default DataTab1;
