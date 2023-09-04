import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {Table, Tag, Button} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";
import {SecondaryHeader} from "../../components/secondaryHeader/index";
import {Container} from "../../components/additionalComponents/container";

export const Students = () => {
    const navigate = useNavigate();
    const students = useSelector((state) => state.students.students);

    const columnsStudents = useMemo(() => [{
        title: "#", dataIndex: "id", key: "id", render: (value) => <span className="font-bold">{value}</span>,
    }, {
        title: "F.I.SH.", dataIndex: "fullName", key: "fullName",
    }, {
        title: "Tel.Raqami", dataIndex: "phone", key: "phone",
    }, {
        title: "Homiylik summasi", dataIndex: "sponsorSum", key: "sponsorSum",
    }, {
        title: "Sarflangan summa", dataIndex: "paid", key: "paid",
    }, {
        title: "Sana", dataIndex: "date", key: "date", render: (value) => dayjs(value).format("DD.MM.YYYY"),
    }, {
        title: "Holati", dataIndex: "status", key: "status", render: (value) => (<Tag
            color={value === "Yangi" ? "blue" : value === "Moderatsiyada" ? "success" : value === "Tasdiqlangan" ? "error" : ""}
        >
            {value}
        </Tag>),
    }, {
        title: "Amallar",
        dataIndex: "id",
        key: "actions",
        render: (value) => (<Button onClick={() => navigate(`/admin/students/${value}`)}>
            <EyeOutlined/>
        </Button>),
    },], [navigate]);

    return (<>
        <SecondaryHeader tab="students"/>
        <Container>
            <Table
                className="mt-[50px]"
                dataSource={students}
                columns={columnsStudents}
                pagination={{
                    pageSize: 10,
                }}
            />
        </Container>
    </>);
};

