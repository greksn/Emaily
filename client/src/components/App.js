import React, { Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'
import Dashboard from './Dashboad'
import Header from './Header'
import "../static/css/app.css"
const surveyNew  = () => <h2>surveyNew</h2>

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
              <Route path="/surveys/new" exact component= {surveyNew}></Route>
            </div>
          </BrowserRouter>
            <footer className="page-footer" >
              <div class="container">
                <div class="row">
                  <div class="col l6 s12">
                    <h5 class="white-text">Wish to easily manage your marketing emails?</h5>
                    <p class="grey-text text-lighten-4">Try Emaily free for 2 monhts</p>
                  </div>
                  <div class="col l4 offset-l2 s12">
                      <h5> <a href="/" className="grey-text text-lighten-3" >Contact</a></h5>
                  </div>
                </div>
              </div>
              <div class="footer-copyright">
                <div class="container">
                  © 2019 Copyright Emaily
                </div>
              </div>
            </footer>
      </div>
    )
  }
}
export default connect(null,  actions) (App);
