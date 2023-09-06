import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useSponsor} from "../../hooks/index";
import {editSponsor} from "../../store/slices/sponsors";
import {
    Button, Col, Form, Input, Modal, Radio, Row, Select, Tag, Typography,
} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {sponsorStatusColors, sponsorStatuses} from "../../data/sponsorsStatuses/index";
import {CrudHeader} from "../../components/croodHeader/index";
import {Container} from "../../components/additionalComponents/container";

const {Option} = Select;

const EditSponsorModal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const {sponsor, sponsorIndex} = useSponsor();
    const [form] = Form.useForm();

    const handleCancel = () => {
        setSearchParams({edit: ""});
    };

    const onFinish = (values) => {
        dispatch(editSponsor({data: {...sponsor, ...values}, index: sponsorIndex}));
        setSearchParams({edit: ""});
    };

    return (<Modal
        title="Homiy"
        visible={searchParams.get("edit")}
        onCancel={handleCancel}
        footer={null}
    >
        <Form
            form={form}
            layout="vertical"
            initialValues={{...sponsor}}
            onFinish={onFinish}
        >
            <Radio.Group
                defaultValue={sponsor?.sponsorStatus}
                className="w-[100%] h-[50px]"
                onChange={(e) => {
                    const newStatus = e.target.value;
                    form.setFieldsValue({sponsorStatus: newStatus});
                }}
            >
                <Radio.Button value="jismoniy" className="w-[50%] h-[40px]">
                    Jismoniy
                </Radio.Button>
                <Radio.Button value="yuridik" className="w-[50%] h-[40px]">
                    Yuridik
                </Radio.Button>
            </Radio.Group>

            <Form.Item
                label="Tashrif buyuruvchining familiyasi, ismi va sharifi"
                name="fullName"
                rules={[{required: true, message: "Iltimos, familiya, ism va sharifni kiriting"},]}
            >
                <Input placeholder="Familiya, ism va sharif"/>
            </Form.Item>
            <Form.Item
                label="Telefon raqam"
                name="phone"
                rules={[{required: true, message: "Iltimos, telefon raqamni kiriting"}]}
            >
                <Input placeholder="Telefon raqam"/>
            </Form.Item>
            <Form.Item
                label="Homiyning umumiy summasi"
                name="sponsorSum"
                rules={[{required: true, message: "Iltimos, homiyning summasini kiriting"},]}
            >
                <Select placeholder="Umumiy summa">
                    <Option value="1000000">1 000 000</Option>
                    <Option value="2000000">2 000 000</Option>
                    <Option value="3000000">3 000 000</Option>
                    <Option value="5000000">5 000 000</Option>
                    <Option value="8000000">8 000 000</Option>
                    <Option value="10000000">10 000 000</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Homiyning umumiy sariflangan summasi"
                name="paid"
                rules={[{
                    required: true, message: "Iltimos, homiyning umumiy sariflangan summasini kiriting",
                },]}
            >
                <Input type="number" placeholder="Umumiy sariflangan summa"/>
            </Form.Item>
            <Form.Item
                name="status"
                label="Holati"
                rules={[{required: true, message: "Holatini tanlang"}]}
            >
                <Select options={sponsorStatuses} style={{width: "100%"}} allowClear/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Saqlash
                </Button>
            </Form.Item>
        </Form>
    </Modal>);
};

export const Sponsor = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const {sponsor} = useSponsor();

    return (<div>
        <EditSponsorModal/>
        <CrudHeader
            onBack={() => navigate("/admin/sponsors")}
            title={<div className="flex items-center">
                <Typography className="mr-2 text-xl font-bold">
                    {sponsor?.fullName}
                </Typography>
                <Tag color={sponsorStatusColors[sponsor?.status]}>
                    {sponsorStatuses.find((item) => item.value === sponsor?.status)?.label}
                </Tag>
            </div>}
        />
        <Container className="py-10 bg-[#f5f5f7] min-h-[84vh]">
            <Row>
                <Col xs={{span: 24}} md={{span: 16, offset: 4}} xl={{span: 12, offset: 6}}>
                    <div className="py-7 px-3 bg-white shadow rounded-2xl">
                        <div className="flex items-center justify-between">
                            <Typography.Title level={5} className="m-0">
                                Homiy haqida
                            </Typography.Title>
                            <Button
                                type="primary"
                                onClick={() => setSearchParams({edit: true})}
                            >
                                <EditOutlined/> Tahrirlash
                            </Button>
                        </div>
                        <div>
                            <Typography>Sponsor
                                date: {sponsor ? new Date(sponsor.date).toLocaleString() : ""}</Typography>
                            <Typography>Sponsor Name: {sponsor?.fullName}</Typography>
                            <Typography>Telefon raqam: {sponsor?.phone}</Typography>
                            <Typography>Status: {sponsor?.status}</Typography>
                            <Typography>
                                Umumiy summa: {Intl.NumberFormat("ru-RU").format(sponsor?.sponsorSum)} so'm
                            </Typography>
                            <Typography>
                                Sariflangan summa: {Intl.NumberFormat("ru-RU").format(sponsor?.paid)} so'm
                            </Typography>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>);
};
