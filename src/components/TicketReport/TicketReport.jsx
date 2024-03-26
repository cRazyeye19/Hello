import React from 'react'
import CardFilter from '../CardFilter/CardFilter'
import TicketTable from '../TicketTable/TicketTable'

const TicketReport = () => {
  return (
    <div className="card recent-sales overflow-auto">
        <CardFilter />
        <div className="card-body">
            <h5 className="card-title">
                Tickets <span>| User</span>
            </h5>
            <TicketTable />
        </div>
    </div>
  )
}

export default TicketReport