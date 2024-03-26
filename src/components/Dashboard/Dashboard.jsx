import React from 'react'
import './dashboard.css'
import Card from '../Card/Card'
import Reports from '../Reports/Reports'
import TicketReport from '../TicketReport/TicketReport'
import Iteration from '../Project Iteration/Iteration'

const Dashboard = () => {
    return (
        <section className='dashboard section'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <Card />
                        <Card />
                        <Card />
                        <div className="col-12">
                            <Reports />
                        </div>
                        <div className="col-12">
                            <TicketReport />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <Iteration />
                </div>
            </div>
        </section>
    )
}

export default Dashboard