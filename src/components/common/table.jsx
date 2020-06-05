import React, { Fragment } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ columns, sortColumn, onSort, data }) => {    
    return ( 
        <Fragment>
            <h5>Showing {data.length} movies in the database</h5>        
                <table className="table">
                    <TableHeader
                                columns={columns}
                                sortColumn={sortColumn}
                                onSort={onSort}
                    />
         
                    <TableBody
                                data={data}
                                columns={columns}                                    
                    />

                </table>
        </Fragment>
     );
}
 
export default Table;