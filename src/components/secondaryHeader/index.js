import React from "react";
import {Radio} from "antd";
import {useNavigate} from "react-router-dom";
import {Container} from "../additionalComponents/container";
import {StyledTab} from "../style/index";
export const SecondaryHeader = ({tab}) => {
    const navigate = useNavigate();
    const onChange = (e) => {
        navigate(`/admin/${e.target.value}`);
    };

    return (<Container className="py-7 shadow">
        <StyledTab value={tab} onChange={onChange}>
            <Radio.Button value="dashboard">Dashboard</Radio.Button>
            <Radio.Button value="sponsors">Homiylar</Radio.Button>
            <Radio.Button value="students">Talabalar</Radio.Button>
        </StyledTab>
    </Container>);
};