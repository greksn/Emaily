import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from "react-router-dom"
import validateEmail from '../../utils/validateEmail'

class surveyForm extends Component {

  renderFields(){
    return (
      <div >  
        <Field label="Survey title" type="text" name="title" component={SurveyField} />
        <Field label="Subject line" type="text" name="subject" component={SurveyField} />
        <Field label="Email body" type="text" name="body" component={SurveyField} />
        <Field label="Recipients list" type="text" name="recipients" component={SurveyField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit = { this.props.handleSubmit(this.props.onSurveySubmit)} >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text" >
          Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit" >
          Next
          <i className="material-icons right" >done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {};
  errors.recipients = validateEmail(values.recipients || "");
  if (!values.title) errors.title = "You must provide a title";
  if(!values.subject) errors.subject="You must provide a subject";
  if(!values.body) errors.body="You must provide a body";
  if(!values.recipients) errors.recipients="You must provide a list of recipients";

  return errors
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(surveyForm);