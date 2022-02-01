import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./login.css";
import images from "./images.png";
import { useAuth } from "../../context/AuthContext";
import useMounted from "../../hooks/useMounted";

const NormalLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signInWithGoogle } = useAuth();
  const { currentUser } = useAuth();

  const mounted = useMounted();

  const creatUser = async () => {
    if (!email || !password) {
      notification.open({
        message: "Credentials not valid",
      });
    }
    setLoading(true);
    login(email, password)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .then(setLoading(true))
      .catch((error) => {
        console.log(error.message);
        notification.open({
          message: error.message,
        });
      })
      .finally(() => mounted.current && setLoading(false));
  };
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };
  return (
    <div className="space-align-block">
      <div align="center">
        <img src={images} alt="logo" />
        <Form
          align="center"
          name="normal_login"
          className="login-form "
          initialValues={{ remember: true }}
          // onFinish={onFinish}
        >
          <h1>Login</h1>
          <h1>{`the current user is :${currentUser}`}</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/forgetpassword">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {
                creatUser();
              }}
              loading={loading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="/signup">register now!</a>
          </Form.Item>
          <Form.Item>
            Or
            <br />
            <br />
            <Button
              onClick={() =>
                signInWithGoogle()
                  .then((user) => console.log(user))
                  .catch((error) => console.log(error))
              }
              icon={<GoogleOutlined />}
              loading={loading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in with google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NormalLoginForm;
