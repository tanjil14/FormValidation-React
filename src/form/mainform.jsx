import React from 'react';
import PropTypes from 'prop-types';
import InputForm from './inputForm';
import RadioForm from './radioform';

const Form =({values,errors,handleChange,agreement,handleAgreement,handleSubmit})=>{

    return(
        <form onSubmit={handleSubmit}>
        <InputForm      //for name field
           label='Name:'
           placeholder='Enter Your Name'
           name='name'
           value={values.name}
           error={errors.name}
           onChange={handleChange}
           />

           <InputForm      //for Email field
           type='email'
           label='Email:'
           placeholder='Enter Your Email'
           name='email'
           value={values.email}
           error={errors.email}
           onChange={handleChange}
           />

           <InputForm      //for Email field
           type='password'
           label='Password:'
           placeholder='Enter Your Password'
           name='password'
           value={values.password}
           error={errors.password}
           onChange={handleChange}
           />

           <InputForm      //for Email field
           type='date'
           name='birthDate'
           value={values.birthDate}
           error={errors.birthDate}
           onChange={handleChange}
           />

           <RadioForm
           className='form-group'
           value='male'
           label='Male'
           onChange={handleChange}
           />

           <RadioForm
           className='form-group'
           value='female'
           label='Female'
           onChange={handleChange}
           />

           <RadioForm
           className='form-group'
           value='other'
           label='Others'
           onChange={handleChange}
           />
           
          <div className='form-group'>
          <label>
          <input 
          type='checkbox'
          className='form-group' 
          name='agreement'
          checked={agreement}
          onChange={handleAgreement}
          />I Agree
          </label>
          <div>
          <button type='submit' className='btn btn-primary' disabled={!agreement} >
          Submit
          </button>
          </div>
          </div>
        </form>
    );
};
Form.propTypes={
    values:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    handleChange:PropTypes.func.isRequired,
    agreement:PropTypes.bool,
    handleAgreement:PropTypes.func.isRequired,
    handleSubmit:PropTypes.func.isRequired
};
export default Form;
