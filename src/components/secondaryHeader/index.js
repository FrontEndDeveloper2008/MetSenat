import React from "react";
import {Radio, Input, Button} from "antd";
import { useNavigate } from "react-router-dom";
import { Container } from "../additionalComponents/container";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
export const SecondaryHeader = ({ tab }) => {
    const navigate = useNavigate();
    const onChange = (e) => {
        navigate(`/admin/${e.target.value}`);
    };

    return (
        <Container className="py-4 shadow flex justify-between items-center">
            <div className="flex">
                {[
                    { value: "dashboard", label: "Dashboard" },
                    { value: "sponsors", label: "Homiylar" },
                    { value: "students", label: "Talabalar" },
                ].map((item) => (
                    <Radio.Button
                        key={item.value}
                        value={item.value}
                        className={`w-[200px] h-[40px] text-center justify-center p-[5px] ${
                            tab === item.value ? "bg-blue-500 text-white" : "bg-white"
                        }`}
                        onChange={onChange}
                    >
                        {item.label}
                    </Radio.Button>
                ))}
            </div>
            <div className="flex items-center">
                <Input
                    size="large"
                    placeholder="Qidirish"
                    style={{ width: "300px", height: "40px", padding: "10px" }}
                    prefix={<SearchOutlined />}
                />
                <Button
                    type="text"
                    icon={<FilterOutlined />}
                    className="text-gray-600 hover:text-gray-800 ml-2"
                />
            </div>
        </Container>
    );
};