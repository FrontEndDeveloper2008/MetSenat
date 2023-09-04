import React from "react";
import {Button, Typography} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Container} from "../additionalComponents/container";

export const CrudHeader = ({title, onBack}) => {
    return (<Container className="py-7 shadow flex items-center gap-3">
        <Button size="small" className="border-0" onClick={onBack}>
            <ArrowLeftOutlined/>
        </Button>
        <Typography>{title}</Typography>
    </Container>);
};