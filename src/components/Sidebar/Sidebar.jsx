import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return (
        <aside id='sidebar' className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className='nav-item'>
                    <a href="/" className="nav-link">
                        <i className='bi bi-grid'></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse'>
                        <i className='bi bi-menu-button-wide'></i>
                        <span>Documents</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul id='components-nav' className='nav-content collapse' data-bs-parent='#sidebar-nav'>
                        <li>
                            <a href="#">
                                <li className='bi bi-circle'></li>
                                <span>Suppliers</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#">
                                <li className='bi bi-circle'></li>
                                <span>Suppliers</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#">
                                <li className='bi bi-circle'></li>
                                <span>Suppliers</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className='nav-item'>
                    <a href="/" className="nav-link">
                        <i className='bi bi-grid'></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="/" className="nav-link">
                        <i className='bi bi-grid'></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="/" className="nav-link">
                        <i className='bi bi-grid'></i>
                        <span>Dashboard</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar