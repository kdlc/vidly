import React, { Component, Fragment } from 'react';

//columns: array
//sortColumn: object
//onSort: function

class TableHeader extends Component {   
    raiseSort = path => {        
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
    
    //Display the Sort Icon 
    renderSortIcon = column => {
        const { sortColumn } = this.props
        if(column.path !== sortColumn.path) return null;
        if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    };

    render() { 
        return ( 

            <Fragment>
                <thead>
                    <tr>
                        {this.props.columns.map(column => 
                            <th className="clickable" key={column.path || column.key } 
                                onClick={() => this.raiseSort(column.path)}
                                scope="col">
                                    {column.label} {this.renderSortIcon(column)}
                            </th>
                        )}
                    </tr>
                </thead>
            </Fragment>

         );
    }
}
 
export default TableHeader;