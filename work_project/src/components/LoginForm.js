import React from 'react'
import '../styles/login.css'
import {FaTimes} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {GrFacebook} from 'react-icons/gr'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'


const LoginForm = ({ isShowLogin, handleLoginClick }) => {

    const handleClick = () => {
        handleLoginClick()
    }

    return (

        <Router>
            <div className={`${!isShowLogin ? "active" : ""} container`}>
                <h2>Log in</h2> <FaTimes onClick={handleClick} className="close"/>
                <button className="btn-google"> <FcGoogle /> LOG IN WITH GOOGLE</button>
                <button className="btn-facebook"> <GrFacebook /> LOG IN WITH FACEBOOK</button>
                <div className="lineBreak1"></div><p>Or</p><div className="lineBreak2"></div>
                <form action="">
                    <div className="form-control">
                        <input type="text" required></input>
                        <label for="">Email</label>
                    </div>
                    <div className="form-control">
                        <input type="password" required></input>
                        <label for="">Password</label>
                    </div>

                    <button className="btn-login">Login</button>
                </form>

                <p>Forgot your password? <Link To="#" style={{color: 'blue'}}>Click here.</Link></p>
                <p>Don't have an account? <Link To="#" style={{color: 'blue'}}>Click here</Link> to create one.</p>
            </div>
        </Router>
    )
}

export default LoginForm
