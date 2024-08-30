import { useEffect, useState } from 'react';
import '../Style/datatable.css';

function DataTable() {
    const [tableData, setTableData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/c/6ba3-cc5f-4861-90f9");
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setTableData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="table-container">
            
            <table className="table" id="table-data">
                <thead>
                    <tr className="table-header">
                        <th className='table-row-id'>#</th>
                        <th className='table-row-movie'>Product Name</th>
                        <th className='table-row-movie'>Category</th>
                        <th className='table-row-rating'>Stock</th>
                        <th className='table-row-images'>Sales</th>
                        <th>Rating</th>
                        <th className='table-row-url'>Total Sales</th>
                        <th className='table-row-movie'>Sale Conversion</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ? (
                        tableData.map((data) => (
                            <tr className="table-body" key={data.id}>
    <td>{data.id}</td>
    <td>{data.productName}</td>
    <td>{data.category}</td>
    <td
        className={
            data.stock < 20 ? "lowStock" :
            data.stock < 100 ? "mediumStock" :
            "highStock"
        }
    >
        {data.stock}
    </td>
    <td
        className={
            data.sales > 99 ? "highSales" :
            data.sales < 99 && data.sales>50? "saleWarning" :
            "saleDanger"
        }
    >
        {data.sales}
    </td>
    <td
        className={
            data.rating < 2 ? "veryLowRating" :
            data.rating < 3 ? "lowRating" :
            data.rating < 4 ? "normalRating" :
            "highRating"
        }
    >
        {data.rating}
    </td>
    <td
        className={
            data.totalSales > 5000 ? "highTotalSales" :
            data.totalSales > 1000 ? "mediumTotalSales" :
            "lowTotalSales"
        }
    >
        {data.totalSales}
    </td>
    <td
        className={
            data.conversions > 50 ? "highConversions" :
            data.conversions > 20 ? "mediumConversions" :
            "lowConversions"
        }
    >
        {data.conversions}
    </td>
</tr>

                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
