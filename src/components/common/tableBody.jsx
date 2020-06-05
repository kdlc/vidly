import React, { Component } from 'react';
import _ from 'lodash';
import shortid from 'shortid';

class TableBody extends Component {      
    renderCell = (item, column)   => {
        //if content is a function, return element
        if(column.content) return column.content(item);
        //if not, return data
        return _.get(item, column.path);
    }
    render() { 
        const { data, columns } = this.props;
        return ( 

            <tbody>
            {data.map((item) => 
                <tr key={shortid.generate()}>                    
                    {columns.map(column => <td key={shortid.generate()}>{this.renderCell(item, column)}</td>)}
                </tr>
            )}
          </tbody>


         );
    }
}
 
export default TableBody;