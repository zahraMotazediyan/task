import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {apiFetchUser} from "../featuers/apiProfile/apiProfileSlice";

const UserProfile = () => {

    const userData = useSelector((state) => state.apiUser.data);

    const dispatch = useDispatch();
    console.log("useData", userData)

    useEffect(() => {
        dispatch(apiFetchUser())

    }, []);

    return (
        <div
            className="rounded-2xl sm:w-full w-[560px] h-screen flex flex-col overflow-hidden bg-gray-100 shadow-2xl border-b-zinc-500 mt-10">
            <h1 className="font-bold text-black mt-10">users</h1>
            <p className="font-bold mt-8">balance : <span
                className="text-blue-800">{userData && userData.balance}</span></p>
            <p className="font-bold mt-5">phoneNumber:<span
                className="text-blue-800">{userData && userData.phoneNumber}</span></p>
        </div>
    )
}

export default UserProfile;