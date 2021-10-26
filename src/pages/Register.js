import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="login-container h-screen w-full flex items-center justify-center">
            <div className="shape-top-right"></div>
            <div className="shape-bottom-left"></div>
            <div className="content-top-right">
                <p className="font-medium">Let’s Make you</p>
                <h1 className="font-bold text-4xl">Sign Up</h1>
            </div>
            <Link to='/login' className="back">
                <i className="fas fa-chevron-left" style={{ color: '#397BEC', fontSize: '26px' }}></i>
            </Link>

            <div className="container">
                <form className="login-form flex flex-col justify-center items-center">
                    <div className="input-group">
                        <input type="text" name="" id="text1" placeholder=" " />
                        <label htmlFor="text1">Username</label>
                    </div>
                    <div className="input-group mt-10">
                        <input type="text" name="" id="text1" placeholder=" " />
                        <label htmlFor="text1">Email</label>
                    </div>
                    <div className="input-group mt-10">
                        <input type="password" name="" id="text2" placeholder=" " />
                        <label htmlFor="text2">Password</label>
                    </div>
                    <div style={{ width: '360px' }} className="mt-10">
                        <select className="w-full bordered">
                            <option value="1">General Seafood Consumer</option>
                            <option value="1">General Seafood Consumer</option>
                            <option value="1">General Seafood Consumer</option>
                        </select>
                    </div>

                    <button type="submit" className="font-bold text-white mt-16">Register</button>
                    <Link to="/login" className="font-bold mt-5"style={{ color: '#081F62' }} >Cancel</Link>
                </form>
            </div>
        </div>
    )
}

export default Register
