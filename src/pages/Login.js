import React from 'react'

const Login = () => {
    return (
        <div className="login-container h-screen w-full flex items-center justify-center">
            <div className="shape-top-left"></div>
            <div className="shape-bottom-right"></div>
            <div className="content-top-left">
                <p className="font-medium">Welcome Back,</p>
                <h1 className="font-bold text-4xl">Login In!</h1>
            </div>

            <div className="container">
                <form className="login-form flex flex-col justify-center items-center">
                    <div class="input-group">
                        <input type="text" name="" id="text1" placeholder=" " />
                        <label for="text1">Email</label>
                    </div>
                    <div class="input-group mt-16">
                        <input type="password" name="" id="text2" placeholder=" " />
                        <label for="text2">Password</label>
                    </div>
                    <div className="flex justify-between w-full mt-4" style={{ width: '360px' }}>
                        <div>
                            <div class="flex items-center justify-center w-full mb-12">
                            
                            <label 
                                for="toogleA"
                                className="flex items-center cursor-pointer"
                            >
                                {/* <!-- toggle --> */}
                                <div className="relative">
                                {/* <!-- input --> */}
                                <input id="toogleA" type="checkbox" className="sr-only" />
                                {/* <!-- line --> */}
                                <div className="w-8 h-2 bg-gray-400 rounded-full shadow-inner" style={{ backgroundColor: '#C4C4C4' }}></div>
                                {/* <!-- dot --> */}
                                <div className="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-2 transition" style={{ top: '-6px' }}></div>
                                </div>
                                {/* <!-- label --> */}
                                <div className="ml-3 text-gray-700 font-medium" style={{ color: '#484848', fontSize: '12px' }}>
                                    Remember me
                                </div>
                            </label>
                            </div>
                        </div>
                        <a href="/" className="forgot">Forgot Password</a>
                    </div>

                    <button type="submit" className="font-bold text-white">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
