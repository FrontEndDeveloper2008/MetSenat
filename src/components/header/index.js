import React from "react";
import {Button} from "antd";
import {BiSolidUserRectangle} from "react-icons/bi";
import {IoLogOut} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {Container} from "../additionalComponents/container";
export const Header = ({setUserActivated}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userActivated");
        setUserActivated(false);
        navigate("/login");
    };

    return (<Container className="shadow py-4 flex justify-between items-center">
        <img
            className="h-6"
            src="https://club.metsenat.uz/img/new-logo.svg"
            alt="Logo"
        />
        <div className="flex items-center space-x-10">
            <Button
                className="w-[133px] h-[40px] flex-shrink-0 rounded-md bg-[#F1F1F3] border-none flex items-center space-x-1 p-[5px] justify-between text-center"
                type="text"
            >
          <span
              className="text-dark-dark-400 text-right font-sfpro text-sm text-[15px] leading-[19.5px] tracking-tighter px-[20px] font-semibold">
            Shohrux
          </span>
                <BiSolidUserRectangle className="w-[32px] h-[32px] text-green-600"/>
            </Button>
            <Button
                onClick={handleLogout}
                className="flex items-center justify-center"
                type="text"
            >
                <IoLogOut className="w-[33px] h-[33px] text-gray-400"/>
            </Button>
        </div>
    </Container>);
};