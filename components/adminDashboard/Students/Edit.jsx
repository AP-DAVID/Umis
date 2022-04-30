import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
} from "antd";
import { InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import Loader from "../../Loader";
import { Popconfirm, message } from "antd";
import axios from "axios";
import { useRouter } from "next/router";

const { Option } = Select;

export default function Edit({ visible, student, setVisible }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    firstname: student?.firstname,
    lastname: student?.lastname,
    email: student?.email,
    status: student?.status,
    age: student?.age,
    state: student?.state,
    country: student?.country,
  });

  function cancel(e) {
    console.log(e);
    message.error("No biggie");
    setVisible(false);
  }

  const handleSubmit = async () => {
    setOpen(true);

    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/student/${student?._id}`, form, config);

      await router.replace(router.asPath);
      await setOpen(false);
      await message.success("Updated successfully");
      await setVisible(false);
    } catch (error) {
      console.log(error);
      message.error("unable to update");
    }
  };

  const Change = (value) => {
    setForm({
      ...form,
      status: value,
    });
  };

  const OnChange = (value) => {
    setForm({
      ...form,
      age: value,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        className=" overflow-x-scroll scrollbar-hide"
        title="Update the account"
        width={300}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Popconfirm
              title="Are you sure you want to Edit?"
              onConfirm={handleSubmit}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary">Edit</Button>
            </Popconfirm>
          </Space>
        }
      >
        <Loader open={open} setOpen={setOpen} />
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstname"
                label="First Name"
                initialValue={form.firstname}
              >
                <Input
                  name="firstname"
                  onChange={handleChange}
                  value={form.firstname}
                  placeholder="enter firstname"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastname"
                label="Last Name"
                initialValue={form.lastname}
              >
                <Input
                  name="lastname"
                  onChange={handleChange}
                  value={form.lastname}
                  placeholder="Please enter user last name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="status"
                label="status"
                initialValue={form.status}
              >
                <Select
                  name="status"
                  onChange={Change}
                  value={form.status}
                  placeholder="Please select an owner"
                >
                  <Option value="paid">Paid</Option>
                  <Option value="unpaid">Unpaid</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="state" label="state" initialValue={form.state}>
                <Input
                  name="state"
                  onChange={handleChange}
                  value={form.state}
                  placeholder="Please enter your state"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="country"
                label="country"
                initialValue={form.country}
              >
                <Input
                  name="country"
                  onChange={handleChange}
                  value={form.country}
                  placeholder="Please enter your country"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="age" label="age" initialValue={form.age}>
                <InputNumber
                  name="age"
                  onChange={OnChange}
                  value={form.age}
                  type="number"
                  className=" px-2 h-10 border-2 border-blue-500  rounded-md"
                  min={0}
                  max={50}
                  defaultValue="age"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="email" label="email" initialValue={form.email}>
                <Input
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  placeholder="Please enter your email"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}
