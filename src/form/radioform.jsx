import React from 'react'
import PropTypes from 'prop-types'


const RadioForm=props=>(
 <div className='form-check form-check-inline'>
 
  <input 
  className='form-check-input '
  type='radio'
  label={props.label}
  value={props.value}
  name='gender'
  onChange={props.onChange}
 required
  
  />
  <label className='form-check-label'>{props.label}</label>
 </div>

);
RadioForm.propTypes={
    value:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};

export default RadioForm;
