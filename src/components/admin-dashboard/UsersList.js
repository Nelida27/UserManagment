import React from 'react'
import Navbar from '../layout/Navbar'

const UsersList = () => {
  return (
    
    <div >
    <Navbar/>
      <div className="card">
        <div className="card-content grey-text">
          <span className="card-title ">Project title</span>
          <p>Posted by The Net Ninja</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>

      <div className="card ">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Project title</span>
          <p>Posted by The Net Ninja</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Project title</span>
          <p>Posted by The Net Ninja</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
      
    </div>
  )
}

export default UsersList