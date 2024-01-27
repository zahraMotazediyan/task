import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {fetchApiForm} from "../featuers/apiForm/apiFormSlice";
import {MdOutlineTimer} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {apiFetchOtp} from "../featuers/apiOtp/apiOtpSlice";


const LoginOtp = ({phoneNumber, setOtpIsLog}) => {

    const [otpCode, setOtpCode] = useState(Array(4).join(""));
    const [counter, setCounter] = React.useState(60);

    const otpRef = [useRef(), useRef(), useRef(), useRef()];

    const navigate = useNavigate();

    const changeHandler = (value, index) => {
        let newArr = [...otpCode];
        newArr[index] = value;
        setOtpCode(newArr)

        if (value && index < 3) {
            otpRef [index + 1].current.focus()
        }
    }
    const backspaceEnter = (e, index) => {
        if (e.key === "Backspace" && e.target.value && index > 0) {
            otpRef[index - 1].current.focus()
        }
        if (e.key === "Enter" && e.target.value && index < 3) {
            otpRef[index + 1].current.focus()
        }
    }

    const dispatch = useDispatch();
    const selectState = useSelector(apiState => {
        // console.log(apiState);
        return apiState
    });

    const sendHandler = async () => {

        try {
            await dispatch(apiFetchOtp({phoneNumber, otpCode}))
            alert("The otp code is correct")
            navigate("/userProfile");

        } catch (error) {
            console.error("Error while sending OTP:", error);
        }

    }


    const resendOtpHandler = async () => {
        try {
            await dispatch(fetchApiForm(phoneNumber));
            setCounter(60);
        } catch (error) {
            alert("Incorrect OTP code. Please try again.");
            console.error("Error while dispatching postData:", error)
        }
    }

    useEffect(() => {
        let timer
        if (counter > 0) {
            timer = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);

            }, 1000)
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer)
    }, [counter])

    return (
        <div
            className="h-screen p-4 bg-gradient-to-b from-blue-800 to-cyan-500 flex flex-col justify-between text-white shadow-2xl rounded-2xl">
            <div className="text-center mb-4">
                <h1 className="text-4xl md:text-6xl mb-2 font-Vazirani sm:mt-6">بیچون پی</h1>
            </div>
            <h4 className="font-vazirani text-xl md:text-xl mt-6">کد فعال سازی را وارد کنید </h4>
            <div className="flex gap-4 justify-center items-center">
                {
                    otpRef.map((ref, index) => (<input
                            key={index}
                            value={otpCode[index]}
                            maxLength={1}
                            onChange={(e) => changeHandler(e.target.value, index)}
                            onKeyDown={(e) => backspaceEnter(e, index)}
                            ref={ref}
                            className="w-12 bg-blue-50 aspect-square hover:bg-blue-500 focus:outline-none appearance-none shadow-2xl rounded-md text-center text-black "
                        />
                    ))
                }
            </div>
            <Link to="/login"> اصلاح شماره همراه{phoneNumber} </Link>
            <div className="flex justify-center items-center">
                <div className="px-2"><MdOutlineTimer/></div>
                <div className="font-bold text-lg w-max"> 00:{counter}</div>
            </div>
            <div className="flex justify-center items-center">
                <button
                    className=" md:w-96 h-16 bg-blue-700 text-white px-6 py-3 rounded-2xl mb-4 font-bold text-lg font-Vazirmatn sm:w-screen"
                    onClick={sendHandler}
                >تایید
                </button>
            </div>
            <button className="underline pb-8" onClick={resendOtpHandler}>ارسال مجدد فعال سازی</button>
            <p>طراحی و توسعه مرسا تحلیل گران دادگان </p>
        </div>
    )
}

export default LoginOtp;