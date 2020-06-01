import React from 'react';
import _ from 'loadash'; //underscore library
const Pagination = props => {    
    const { itemsCount, pageSize } = props;
    const pagesCount = itemsCount / pageSize;
    //[1...pagesCount].map()
    const pages = _.range(1, pagesCount + 1)

    return (
        <nav>
            <ul className="Pagination">
                {pages.map(page => {
                    return (
                    <li className="page-item">
                            <a href={`/page/${page}`} className="page-link">{page}</a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    );
    
}
 
export default Pagination;