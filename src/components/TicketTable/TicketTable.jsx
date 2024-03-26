import React from 'react'
import './ticketTable.css'

const TicketTable = () => {
  return (
    <table className='table table-borderless datatable'>
      <thead className='table-light'>
        <tr>
          <th scope='col'>Ticket #</th>
          <th scope='col'>Issue</th>
          <th scope='col'>Description</th>
          <th scope='col'>Status</th>
          <th scope='col'>Priority</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>
            <a href="#">1</a>
          </th>
          <td>Leakage</td>
          <td>
            <a href="#" className='text-primary'>Lorem ipsum dolor sit.</a>
          </td>
          <td><span>Open</span></td>
          <td>
            <span className='badge bg-success'>High</span>
          </td>
          <td>
            <i className='bi bi-pencil-square' style={{ marginRight: '15px' }}></i>
            <i className='bi bi-trash3'></i>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TicketTable