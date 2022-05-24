import {Component} from "react";
import axios from "axios";
import './Register.css';
import {Link} from "react-router-dom";


export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            lastName: '',
            firstName: '',
            email: '',
            password: '',
            address: ''
        }
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        axios("http://localhost:8080/v1/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(this.state)
        }).then(res => {
                document.getElementById('registerSuccess').innerHTML = "";
                console.log(res);
                document.getElementById('registerSuccess').style.color = 'green';
                document.getElementById('registerSuccess').innerHTML += res.data;
            })
            .catch(err => {
                document.getElementById('registerSuccess').innerHTML = "";
                console.log(err);
                document.getElementById('registerSuccess').style.color = 'red';
                document.getElementById('registerSuccess').innerHTML = err.request.responseText;
            })
    }

    render () {
        const {username, lastName, firstName, email, password, address} = this.state;
        return (
            <div id="backgroundRegisterForm">
                <center><h1 id="registerTitle">Create your account!</h1></center>
                <form id="registerForm" onSubmit={this.submitHandler}>
                    <input placeholder="Choose a username" type="text" name="username" value={username} onChange={this.changeHandler} required/>
                    <input placeholder="Your last name" type="text" name="lastName" value={lastName} onChange={this.changeHandler} required/>
                    <input placeholder="Your first name" type="text" name="firstName" value={firstName} onChange={this.changeHandler} required/>
                    <input placeholder="Your email" type="email" name="email" value={email} onChange={this.changeHandler} required/>
                    <input placeholder="Choose a password" type="password" name="password" value={password} onChange={this.changeHandler} required/>
                    <input placeholder="Your home address" type="text" name="address" value={address} onChange={this.changeHandler} required/>
                    <button type="submit">Register</button>
                    <button type="button">
                        <Link to="/login">To login page</Link>
                    </button>
                    <div id="registerSuccess">
                    </div>
                </form>
            </div>
        )
    }
}


export default Register;