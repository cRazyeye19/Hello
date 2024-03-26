import React from 'react'
import './card.css'
import CardFilter from '../CardFilter/CardFilter'

const Card = () => {
    return (
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
                <CardFilter />
                <div className="card-body">
                    <h5 className="card-title">
                        <span>Users</span>
                    </h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className='bi bi-people-fill'></i>
                        </div>
                        <div className="ps-3">
                            <h6>
                                Tickets
                            </h6>
                            <span className='text-success small pt-1 fw-bold'>
                                100%
                            </span>
                            <span className='text-muted small pt-2 ps-1'>
                                increase
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card