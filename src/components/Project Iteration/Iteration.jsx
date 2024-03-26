import React from 'react'
import './iteration.css'
import CardFilter from '../CardFilter/CardFilter'
import Version from '../VersionItem/Version'

const Iteration = () => {
  return (
    <div className="card">
        <CardFilter />
        <div className="card-body">
            <h5 className="card-title">
                Project <span>| Version</span>
            </h5>
            <div className="activity">
                <Version />
            </div>
        </div>
    </div>
  )
}

export default Iteration