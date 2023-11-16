import React, { useState, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
// import { useNavigate } from 'react-router-dom'

import './Account.css'
export default function Account({ onClose }) {

    const [userNumber, setUserNumber] = useState('')
    const [sendOtpVisible, setSendOTPVisible] = useState(true)
    const [submitOtpVisible, setSubmitOTPVisible] = useState(false)

    const [numberError, setNumberError] = useState(false)
    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose();
        }
    };

    const handleChnage = (e) => {
        setUserNumber(e.target.value)
    }

    const handleSendOTP = async () => {

        if (userNumber === '') {
            setNumberError(true)
            return
        }

        const res = await fetch('http://localhost:5000/api/auth/getotp', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'number': userNumber })
        })
        const data = await res.json()

        if (data.success === false) {
            console.log(data.error)
            return
        }
        setSendOTPVisible(false)
        setSubmitOTPVisible(true)
    }


    const [otp, setOtp] = useState('');
    const inputs = useRef(null);

    // const handleInputChange = (e, index) => {
    //     const value = e.target.value;

    //     // Update the OTP state
    //     let newOtp = otp;
    //     newOtp = newOtp.substring(0, index) + value + newOtp.substring(index + 1);
    //     setOtp(newOtp);

    //     // Move the cursor to the next input if there's a value
    //     if (value !== '' && index < 3) {
    //         inputs[index + 1].current.focus();
    //     }
    // };

    const handleBackspace = (e, index) => {
        // Move the cursor to the previous input if backspace is pressed in an empty input
        if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
            inputs[index - 1].current.focus();
        }
    };

    const handleOtpClose = () => {
        setSubmitOTPVisible(false)
        setSendOTPVisible(true)
    }

    const handleOTPSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:5000/api/auth/verifyotp', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'number': userNumber, 'otp': otp })
        })
        const data = await res.json()

        if (data.success === false) {
            setNumberError(data.error)
            return
        }
        console.log(data)
        setSubmitOTPVisible(false)
        onClose();
    }


    return (
        <div className='account_container'>
            <div className="account_box">
                {sendOtpVisible &&
                    <div className='account_s'>
                        <AiOutlineClose className='close_icon' onClick={handleClose} />
                        <div className='login_div'>
                            <p className='login'>Login</p>
                            <hr className='line' />
                            <p className='account'>Create Account</p>
                        </div>
                        <div>
                            Please enter your Phone Number
                        </div>
                        <div className='input_div'>
                            <input type="text" placeholder='Enter your phone number' name='number' id="number" onChange={handleChnage} />
                            {numberError && (<p style={{ color: 'red', fontSize: '15px', textAlign: 'center' }}>{numberError}</p>)}
                        </div>

                        <div className='signedId'>
                            <input type="checkbox" name="" id="" />
                            <span>Keep me Signed In</span>
                        </div>
                        <div className='termcon'>
                            By continuing you agree to our Terms of Use & Privacy Policy
                        </div>
                        <div className='button'>
                            <button className='btn' onClick={handleSendOTP}>CONTINUE</button>
                        </div>
                    </div>


                }
                {submitOtpVisible &&
                    <form onSubmit={handleOTPSubmit} className='verify_otp'>
                        <AiOutlineClose className='close_icon' onClick={handleOtpClose} />
                        <h4>Verify WITH OTP</h4>
                        <h5>sent to 8657206737</h5>
                        <div className='otp_box'>
                            {inputs.map((inputRef, index) => (
                                <input
                                    key={index}
                                    ref={inputRef}
                                    type="number"
                                    value={otp[index] || ''}
                                    required
                                    // onChange={(e) => handleInputChange(e, index)}
                                    onKeyUp={(e) => handleBackspace(e, index)}
                                />
                            ))}
                            {numberError && (<p style={{ color: 'red', fontSize: '15px', textAlign: 'center' }}>{numberError}</p>)}

                        </div>
                        <p>Resend otp in 5 sec <span style={{ color: 'green' }}>Resend</span></p>
                        <button className='otp_button' type='submit'>
                            Submit OTP
                        </button>
                    </form>
                }
            </div>
        </div>
    )
}
