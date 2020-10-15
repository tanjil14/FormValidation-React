import React from 'react'
import PropTypes from 'prop-types';


const InputForm=props=>(

    <div className='form-group'>
    <label htmlFor={props.name}>{props.label}</label>
    <input
    className={props.error?'form-control is-invalid':'form-control'}
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    />
    {props.error && <div className='invalid-feedback'>{props.error}</div>}
    </div>
);
InputForm.defaultProps={
type:'text',
label:'',
placeholder:''
};

InputForm.propTypes={
    type:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    error:PropTypes.string,
    onChange:PropTypes.func.isRequired
}
export default InputForm;