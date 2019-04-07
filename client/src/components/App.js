import React, { Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
const Dashboard  = () => <h2>Dashboard</h2>
const surveyNew  = () => <h2>surveyNew</h2>
const Landing  = () => <h2>Landing</h2>

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
            <Route path="/" component= {Landing}></Route>
            <Route path="/surveys/new" exact component= {surveyNew}></Route>
            <Route path="/surveys" exact component= {Dashboard}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default connect(null,  actions) (App);
