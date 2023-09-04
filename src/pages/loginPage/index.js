import React, {useState} from "react";
import {Button, Input, Card, Checkbox} from "antd";
import {useNavigate} from "react-router-dom";
import {Container} from "../../components/additionalComponents/container";
import "react-toastify/dist/ReactToastify.css";

export const Login = ({setUserActivated}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const submit = () => {
        setSubmitting(true);

        if (checkboxChecked && login === "3W" && password === "2023") {
            setUserActivated(true);
            localStorage.setItem("userActivated", "true");
            setTimeout(() => {
                navigate("/admin/dashboard");
            }, 200);
        }
        setSubmitting(false);
    };

    const onChange = (e) => {
        setCheckboxChecked(e.target.checked);
    };

    return (<Container className="flex justify-center items-center h-screen bg-[#F5F5F7]">
        <div>
            <img
                className="w-[350px] mx-auto mb-[50px]"
                src="https://club.metsenat.uz/img/new-logo.svg"
                alt=""
            />
            <Card
                className="w-[360px] flex flex-col items-center gap-10 p-0 border border-solid border-[#EBEEFC] rounded-lg bg-white shadow-lg"
            >
                <h1 className="text-3xl mb-[44px] mt-0 text-dark-dark-400 font-sans font-normal text-24 leading-28">
                    Kirish
                </h1>

                <p className="font-bold text-xs tracking-widest uppercase">LOGIN</p>
                <Input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Login"
                    className="mb-3 w-[315px] h-[42px] px-[15.5px] py-[12px] pr-[77.5px] pl-[15.5px] border border-solid border-blue-200 rounded-md bg-E0E7FF bg-opacity-20"
                />
                <p className="font-rubik text-xs font-bold tracking-widest uppercase">
                    PASSWORD
                </p>
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="mb-3 w-[315px] h-[42px] px-[15.5px] py-[12px] pl-[15.5px] border border-solid border-blue-200 rounded-md bg-E0E7FF bg-opacity-20"
                    type="number"
                />
                <div
                    className="flex items-center justify-between p-4 space-x-2 rounded-[5px] my-[22px] h-[75px] border-spacing-[1px] border-[1px] border-solid border-gray-300">
                    <Checkbox onChange={onChange} className="font-rubik">
                        <p className="font-roboto text-14 font-normal text-black text-[17px]">
                            I’m not a robot
                        </p>
                    </Checkbox>
                    <img
                        className="w-[50px]"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png"
                        alt=""
                    />
                </div>

                <Button
                    onClick={submit}
                    disabled={submitting || !(checkboxChecked && login && password)}
                    className="w-[315px] h-[50px] flex-shrink-0 font-bold text-white rounded-1xl bg-blue-500 hover:bg-blue-700 hover:shadow-2xl border-none custom-button-style"
                >
                    {submitting ? "Submitting..." : "Login"}
                </Button>
            </Card>
        </div>
    </Container>);
};
