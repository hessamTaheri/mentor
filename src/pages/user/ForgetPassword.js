import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import images from "./images.png";
import { useAuth } from "../../context/AuthContext";

const ForgetPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [email, setEmail] = useState("");
  const { forgetpassword } = useAuth();

  const resetPasword = async () => {
    forgetpassword(email)
      .then((response) => {
        console.log(response)
        notification.open({
          message: "Email sent, check your email",
        });
      })
      .catch((error) => {
        console.log(error.message);
        notification.open({
          message: error.message,
        });
      })
  };

  return (
    <div className="space-align-block">
      <div align="center">
        <img src={images} alt="logo" />
        <Form
          align="center"
          name="normal_login"
          className="login-form "
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          Reset Password
          <Form.Item
            name="Email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {
                resetPasword();
              }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              submit
            </Button>
            Or <a href="/login">login</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
