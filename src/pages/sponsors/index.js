import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {Table, Tag, Button} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";
import {SecondaryHeader} from "../../components/secondaryHeader/index";
import {Container} from "../../components/additionalComponents/container";
import {sponsorStatusColors, sponsorStatuses} from "../../data/sponsorsStatuses";

export const Sponsors = () => {
    const navigate = useNavigate();
    const sponsors = useSelector((state) => state.sponsors.sponsors);

    const columnsSponsors = useMemo(() => [{
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
        title: "Holati", dataIndex: "status", key: "status", render: (value) => ( <Tag color={sponsorStatusColors[value]}>
            {sponsorStatuses.find((item) => item.value === value)?.label}
        </Tag>)
    }, {
        title: "Amallar",
        dataIndex: "id",
        key: "actions",
        render: (value) => (<Button onClick={() => navigate(`/admin/sponsors/${value}`)}>
            <EyeOutlined/>
        </Button>),
    },], [navigate]);

    return (<>
        <SecondaryHeader tab="sponsors"/>
        <Container>
            <Table
                className="mt-[50px]"
                dataSource={sponsors}
                columns={columnsSponsors}
                pagination={{
                    pageSize: 10,
                }}
            />
        </Container>
    </>);
};