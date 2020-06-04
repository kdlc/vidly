import React from 'react';
//import _ from 'loadash'; //underscore library
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {    
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);    

    if (pagesCount === 1) return null;
    //[1...pagesCount].map()
    const pages = _.range(1, pagesCount + 1)

    return (
        <nav aria-label="Page Navigation Example">
            <ul className="pagination">
                {pages.map(page => {
                    return (
                      <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                        <a href="#" className="page-link" onClick={() => onPageChange(page)}>{page}</a>                        
                      </li>
                    );
                })}
            </ul>
        </nav>
    );    
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination;