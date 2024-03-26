import React from 'react'

const CardFilter = () => {
    return (
        <div className="filter">
            <a href="#" className="icon" data-bs-toggle='dropdown'>
                <i className='bs bi-three-dots'></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                </li>
                <li>
                    <a className="dropdown-item">
                        Today
                    </a>
                </li>
                <li>
                    <a className="dropdown-item">
                        This Week
                    </a>
                </li>
                <li>
                    <a className="dropdown-item">
                        This Month
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default CardFilter