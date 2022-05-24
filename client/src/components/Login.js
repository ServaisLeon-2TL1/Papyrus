import {Component} from "react";
import axios from "axios";
import './Login.css';
import {Link} from "react-router-dom";


export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        axios("http://localhost:8080/v1/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(this.state)
        }).then(res => {
            document.getElementById('loginError').innerHTML = "";
            console.log(res);
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.getItem('accessToken');
            document.getElementById('loginError').style.color = 'green';
            document.getElementById('loginError').innerHTML += "Successfully connected!";
        }).catch(err => {
            document.getElementById('loginError').innerHTML = "";
            console.log(err)
            document.getElementById('loginError').style.color = 'red';
            document.getElementById('loginError').innerHTML += err.response.data;
        })
    }

    render () {
        const {username, password} = this.state;
        return (
            <div id="backgroundLoginForm">
                <center><h1 id="loginTitle">Login to your account!</h1></center>
                <form id="loginForm" onSubmit={this.submitHandler}>
                    <input placeholder="Your username" type="text" name="username" value={username} onChange={this.changeHandler} required/>
                    <input placeholder="Your password" type="password" name="password" value={password} onChange={this.changeHandler} required/>
                    <button type="submit">Login</button>
                    <button type="button">
                        <Link to="/register">To register page</Link>
                    </button>
                    <div id="loginError">
                    </div>
                </form>
            </div>
        )
    }
}


export default Login;