import React from 'react';
import _ from 'lodash';

const Pagination = props => {

    const pages = _.range(1, props.pageCount +1)

    return (
        <>
            <nav>
                <ul className="pagination justify-content-center my-5">

                {pages.map(page => (
                    <li key={page}
                        className= {props.activePage === page ? 
                                        "active page-item" :
                                        "page-item"}>

                        <a 
                            onClick={() => props.onPageChange(page)}
                            className="page-link"
                            href="#">

                            {page}
                        </a>
                    </li>
                ))}

                </ul>
            </nav>
        </>
    )
}

export default Pagination