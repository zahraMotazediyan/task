import React, {useEffect} from "react";

///icon
import {SlArrowLeft} from "react-icons/sl";
import {FaBell} from "react-icons/fa6";
import {SlMenu} from "react-icons/sl";
import photo from "../icon/hand-drawn-busy-office-template_52683-149806.jpg";
import {Link, useNavigate} from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/")
        }
    }, []);

    return (<div
        className="rounded-2xl w-[560px]sm:w-full h-screen flex flex-col justify-around overflow-hidden bg-gray-100 shadow-2xl border-b-zinc-500 ">
        <div className="sm:w-full flex justify-around items-center ">
            <div className="text-2xl text-blue-700"><SlArrowLeft/></div>
            <div className="text-2xl text-blue-700"><FaBell/></div>
            <h3 className="text-2xl text-blue-800 font-bold">بیچون پی</h3>
            <div className="text-2xl text-blue-700"><SlMenu/></div>
        </div>
        <div className="flex flex-col items-center mt-5">
            <img className="w-64 mb-1 rounded-2xl" src={photo} alt="photo"/>
            <div className="flex flex-col text-center text-blue-700 w-80">
                <p className="mt-1"> تیم پشتبانی بیچون پی</p>
                <p className="mt-1"> پاسخگوی سوالات ومشکلات شماست
                    برای دریافت راهنمایی وکسب اطلاعات بیشتر</p>
                <p className="mt-1">می توانید باماتماس بگیرید</p>
            </div>
        </div>
        <div className="flex flex-col justify-around">
            <div className="mt-10 mx-5">
                <Link to="#" className="text-white bg-blue-800 font-bold px-7 py-3 rounded-2xl">ثپت تیکت
                    جدید</Link>
                <Link to="#" className="text-white bg-blue-800 font-bold px-7 py-3 rounded-2xl">پیگیری تیکت
                    ها</Link>
            </div>
            <div className="flex justify-around mt-10 mx-5 px-2" >
                <Link className="text-white bg-blue-800 font-bold px-7 py-3 rounded-2xl" to="#">سوالات
                    متداول</Link>
                <Link className="text-white bg-blue-800 font-bold px-7 py-3 rounded-2xl" to="#">تماس با
                    پشتیبانی </Link>
            </div>
        </div>
    </div>)
}

export default MainPage;