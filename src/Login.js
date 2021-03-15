import React,{useState} from 'react'
import './Login.css'
import logo from './cover.png'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'

const Login = () => {
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            history.push('/')
        })
        .catch((e) => alert(e.message))

    }
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            history.push('/')
        })
        .catch((e) => alert(e.message))
    }
    return (
        <div className = "login">
            <Link to="/login">
                <img className = "login__logo" src={logo} alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value = {email} onChange = {event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value = {password} onChange = {event => setPassword(event.target.value)} type="password"/>
                    <button type = "submit" className = "login__signInButton" onClick = {login}>Sign in</button>
                </form>
                <p>By Signing-in you agree to Safeshop' terms and conditions to see our Privacy Notice,our Cookies Notice and our Ads Based Notices</p>
                <button className = "login__registerButton" onClick = {register}>Create your Safeshop Account</button>

            </div>
        </div>
    )
}

export default Login
