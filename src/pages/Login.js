import React, {useEffect, useState} from "react";
import LoginForm from "../component/LoginForm";
import LoginOtp from "../component/LoginOtp";
import Guide from "./Guide";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [data, setData] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpIsLog, setOtpIsLog] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            navigate("/mainPage")
        }
    }, []);

    return (
        <>
            <div
                className="w-[560px] sm:w-full h-screen flex justify-center items-center bg-gray-50 scroll-m-0 overflow-x-hidden overflow-y-hidden ">
                {
                    data ? <LoginOtp phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                                     setOtpIsLog={() => setOtpIsLog()}
                        /> :
                        <LoginForm setData={setData} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                }

                <div>
                    {otpIsLog && <Guide/>}
                </div>
            </div>
        </>
    )
}

export default Login;