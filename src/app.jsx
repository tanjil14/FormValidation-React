import React from 'react'
import SignupForm from './form'
import classes from './app.module.css'

class App extends React.Component{
    state={
        users:[
            { 
             name:'tanjil',
            email:'tanjil@gmail.com',
            password:'',
            birthDate:'',
            gender:''

            },
        ]
    };
    createUser=user=>{
        user.id=new Date().getTime().toString()
        this.setState({
            users:[...this.state.users,user]
        })
    }
    render(){

    
    return(
        <div className={classes.App}>
        <h1>Form Validation Practice</h1>
        <SignupForm 
        createUser={this.createUser}/>
        <hr/>
        <div className='my-5'>
        <h1>All Registered User</h1>
        <ul className='list-group'>
        {this.state.users.map(user=>(
            <li key={user.id} className='list-group-item'><h1>{user.name }:{user.email}</h1></li>
        ))}
        </ul>
        </div>
        </div>
        
    )
}
}
export default App;