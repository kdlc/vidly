import React, { Component, Fragment } from 'react';

//columns: array
//sortColumn: object
//onSort: function

class TableHeader extends Component {   
    raiseSort = path => {
        console.log(path);
        //clone sortColumn object
        const sortColumn = { ...this.props.sortColumn };    
        if (sortColumn.path === path) {
          sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        }
        else {
          sortColumn.path = path;
          sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }
    
    render() { 
        return ( 

            <Fragment>
                <thead>
                    <tr>
                        {this.props.columns.map(column => <th key={column.path || column.key } onClick={() => this.raiseSort(column.path)} scope="col">{column.label}</th>)}
                    </tr>
                </thead>
            </Fragment>

         );
    }
}
 
export default TableHeader;