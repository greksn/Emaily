import React, { Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'
import Dashboard from './Dashboad'
import Header from './Header'
import SurveyNew from './surveys/SurveyNew'
import "../static/css/app.css"

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return(
      <div>
          <BrowserRouter>
            <div className="" >
              <Header></Header>
              <Route path="/" exact component= {Landing}></Route>
              <Route path="/surveys" exact component= {Dashboard}></Route>
              <Route path="/surveys/new" exact component= {SurveyNew}></Route>
            </div>
          </BrowserRouter>
            <footer className="page-footer" >
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Wish to easily manage your marketing emails?</h5>
                    <p className="grey-text text-lighten-4">Try Emaily free for 2 monhts</p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                      <h5> <a href="/" className="grey-text text-lighten-3" >Contact</a></h5>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                  © 2019 Copyright Emaily
                </div>
              </div>
            </footer>
      </div>
    )
  }
}
export default connect(null,  actions) (App);
