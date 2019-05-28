import React, { Component } from 'react'

class SurveyField extends Component {
  constructor(props){
    super();
    
  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input  {...this.props.input} style={{marginBottom:7}} />
        <div className="red-text" style={{marginBottom:20}} >
          {this.props.meta.touched && this.props.meta.error}
        </div>
      </div>
    )
  }
}

export default SurveyField;