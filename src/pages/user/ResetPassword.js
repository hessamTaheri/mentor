import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import images from "./images.png";
import { useAuth } from "../../context/AuthContext";

const ResetPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  function useQuery() {
    const location = useLocation();
    return new URLSearchParams(location.search);
  }
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const query = useQuery();
  console.log(query.get("mode"));
  console.log(query.get("oobCode"));
  console.log(query.get("continueUrl"));

  const [newPassword, setNewPassword] = useState("");

  const reset = async () => {
    resetPassword(query.get("oobCode"), newPassword)
    .then((res) =>{
      console.log(res)
      notification.open({
        message: "Password has been changed, you can login now.",
      });
      navigate("/login")
    })
    .catch((error) => {
      console.log(error.message);
      notification.open({
        message: error.message,
      });
    })
  }
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
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your newPassword!" },
            ]}
          >
            <Input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {
                reset();
              }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
