import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchApiForm} from "../featuers/apiForm/apiFormSlice";
import {Link} from "react-router-dom";

const LoginForm = ({setData, phoneNumber, setPhoneNumber}) => {

    const changeHandler = (e) => {
        setPhoneNumber(e.target.value)
    };

    const dispatch = useDispatch();
    const selectState = useSelector(apiState => {
        return apiState
    });

    const sendHandler = async () => {
        try {
            await dispatch(fetchApiForm(phoneNumber))
            setData({selectState})
        } catch (error) {
            console.error("Error while dispatching postData:", error)
        }
    }

    return (
        <div
            className="h-screen p-4 bg-gradient-to-b from-blue-800 to-cyan-500 flex flex-col justify-between text-white shadow-2xl rounded-2xl">
            <div className="text-center mt-10">
                <h1 className="text-4xl md:text-6xl mb-2 font-Vazirani ">بیچون پی</h1>
                <h3 className="font-vazirani text-lg md:text-2xl mt-6">خوش آمدید</h3>
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-4">
                    <label className="block text-lg mb-2 font-Vazirmatn text-right font-bold">شماره تلفن همراه</label>
                    <input className="md:w-96 h-16 px-4 border rounded-2xl text-center text-black" type="tel"
                           value={phoneNumber} onChange={changeHandler}
                           placeholder="09*********"/>
                </div>
                <div className="text-white mt-8">
                    <button
                        className="md:w-96 h-16 bg-blue-700 text-white px-24 py-3 rounded-2xl mb-4 font-bold text-lg font-Vazirmatn focus:outline-0"
                        onClick={sendHandler}>ورود
                    </button>
                    <div className="flex justify-around mb-4 sm:space-x-4">
                        <Link to="/guide" className="font-Vazirmatn text-sm underline leading-6">راهنما</Link>
                        <Link to="/bichonPiRules" className="font-Vazirmatn text-sm underline leading-6">قوانین بیچون
                            پی </Link>
                    </div>
                </div>
            </div>
            <div className="text-white mt-8 text-center font-Vazirmatn">
                <p>طراحی و توسعه مرسا تحلیل گران دادگان </p>
            </div>
        </div>
    )
}

export default LoginForm;



