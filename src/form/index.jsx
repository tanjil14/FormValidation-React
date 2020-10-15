import React from 'react'
import Form from './mainform'
import PropTypes from 'prop-types';

const initValues={
    name:'',
    email:'',
    password:'',
    birthDate:'',
    gender:''
};
class SignupForm extends React.Component{
    state={
        values:initValues,
        errors:{},
        agreement:false

    };
    handleChange=event=>{
        this.setState({
            values:{
                ...this.state.values,[event.target.name]:event.target.value
            }
        })
    };
    handleAgreement=event=>{
        this.setState({
            agreement:event.target.checked
        })
    };
    handleSubmit=event=>{
        event.preventDefault();
        const {errors,isValid}=this.validation()
        if(isValid){
        // console.log(this.state.values)
        this.props.createUser(this.state.values)
        event.target.reset()
        this.setState({values:initValues,errors:{},agreement:false})
    }else{
        this.setState({errors});
    }
    };
    validation=()=>{
        const errors={}
        const {values:{name,email,password,gender,birthDate}}=this.state
        if(!name){
            errors.name='Please Provide Your Name'
        }
        if(!email){
            errors.email='Please Provide Email'
        }
        if(!password){
            errors.password='Please Provide your password'
        }
        if(!gender){
            errors.gender='Please Select Gender'
        }
        if(!birthDate){
            errors.birthDate='Please Provide BirthDate'
        };
        return {
            errors,
            isValid:Object.keys(errors).length==0
        }

    };
    render(){
        return(
            <div className="">
            
            
            <Form
            values= {this.state.values}
            errors={this.state.errors}
            agreement={this.state.agreement}
            handleChange={this.handleChange}
            handleAgreement={this.handleAgreement}
            handleSubmit={this.handleSubmit}
            />
            



            </div>
        )
    }
};
SignupForm.propTypes={
    createUser:PropTypes.func.isRequired
}
export default SignupForm; 