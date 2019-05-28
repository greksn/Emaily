import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history })  => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <div>
          <label>Survey title</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Survey subject</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Survey body</label>
          <div>{formValues.body}</div>
        </div>
        <div>
          <label>Recipients list</label>
          <div>{formValues.recipients}</div>
        </div>
      </div>
      <button className="btn-flat yellow darken-3" onClick={onCancel} >
        Back
      </button>
      <button
      onClick={() => submitSurvey(formValues, history)}
      className="green btn-flat right white-text" >
        Send emails 
        <i className="material-icons right" >email</i> 
        </button>
    </div>
  )
}

function mapStateToProps(state){
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
