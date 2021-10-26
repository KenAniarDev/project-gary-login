import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Asset1 from '../assets/asset1.png'
import Asset2 from '../assets/asset2.png'
import Asset3 from '../assets/asset3.png'


const Welcome = () => {
    const [welcome, setWelcome] = useState([true, false, false])
    return (
        <div className="welcome-container w-full h-screen flex items-center justify-center text-white">
            <div className="container">
                {welcome[0] &&
                    <div className="first-screen flex flex-col items-center w-full mt-32">
                        <img src={Asset1} alt="" className="mb-12" />
                        <p className="text font-medium text-center w-36 mb-8">Lets you take to your Digital Identity!</p>
                        <button className="next font-bold" onClick={() => setWelcome([false, true, false])}>Next</button>
                        <br />
                        <Link to='/login' className="skip font-bold">Skip</Link>
                        <ul className="dots flex mt-10">
                            <li className="active" onClick={() => setWelcome([true, false, false])}></li>
                            <li onClick={() => setWelcome([false, true, false])}></li>
                            <li onClick={() => setWelcome([false, false, true])}></li>
                        </ul>
                    </div>
                }
                {welcome[1] && 
                    <div className="second-screen flex flex-col items-center w-full mt-32">
                        <img src={Asset2} alt="" className="mb-12" />
                        <p className="text font-medium text-center w-36 mb-8">Share Securly with Who you want!</p>
                        <button className="next font-bold" onClick={() => setWelcome([false, false, true])}>Next</button>
                        <br />
                        <Link to='/login' className="skip font-bold">Skip</Link>
                        <ul className="dots flex mt-10">
                            <li onClick={() => setWelcome([true, false, false])}></li>
                            <li className="active" onClick={() => setWelcome([false, true, false])}></li>
                            <li onClick={() => setWelcome([false, false, true])}></li>
                        </ul>
                    </div>
                }
                {welcome[2] &&
                    <div className="third-screen flex flex-col items-center w-full mt-32">
                    <img src={Asset3} alt="" className="mb-12" />
                    <p className="text font-medium text-center w-36 mb-8">Keep your DigitalIdentity Safe!</p>
                    <Link to='/login' className="next font-bold">Next</Link>
                    <br />
                    <Link to='/login' className="skip font-bold">Skip</Link>
                    <ul className="dots flex mt-10">
                        <li onClick={() => setWelcome([true, false, false])}></li>
                        <li onClick={() => setWelcome([false, true, false])}></li>
                        <li className="active" onClick={() => setWelcome([false, false, true])}></li>
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}

export default Welcome
