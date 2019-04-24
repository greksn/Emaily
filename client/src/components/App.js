import React, { Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'

import Header from './Header'
const Dashboard  = () => <h2>Dashboard</h2>
const surveyNew  = () => <h2>surveyNew</h2>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path="/" exact component= {Landing}></Route>
            <Route path="/surveys" exact component= {Dashboard}></Route>
            <Route path="/surveys/new" exact component= {surveyNew}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default connect(null,  actions) (App);
