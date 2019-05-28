import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

class Dashboad extends Component {
  render() {
    return (
      <div className="dashboard">
        <SurveyList />
        <div className="fixed-action-btn" >
          <Link className="btn-floating btn-large red" to="/surveys/new" >
            <i className="material-icons" >add</i>
          </Link>
        </div>
      </div>
    )
  }
}


export default Dashboad;