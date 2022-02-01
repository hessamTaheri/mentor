import { Form, Input, Button, Alert, notification } from "antd";
import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import "./login.css";
import images from "./images.png";
import { collection, addDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useMounted from "../../hooks/useMounted";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState(0);
  const usersCollectionRef = collection(db, "users");


  const {register} = useAuth();
  const mounted =  useMounted()

  const creatUser = async () => {
    if (!newEmail || !newPassword) {
      notification.open({
        message: "Credentials not valid",
      });
    }
    setLoading(true);
    register(newEmail, newPassword)
      .then((response) => console.log(response))
      .then(setLoading(true))
      .catch((error) => {
        console.log(error.message);
        notification.open({
          message: error.message,
        });
      })
      .finally(() => mounted.current && setLoading(false))
    

    // await addDoc(usersCollectionRef, {
    //   username: newEmail,
    //   password: Number(newPassword),
    // });
  

  };

  // async function handleSubmit() {
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     setError(emailRef.current.value);
  //   }
  //   setLoading(false);
  // }

  return (
    <div className="space-align-block">
      <div align="center">
        <img src={images} alt="logo" />
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 7,
      }}
      initialValues={{
        remember: true,
      }}
      // onFinish={handleSubmit}
      autoComplete="on"
    >
      <h1 align="center">Register</h1>
      {error && <Alert message={error} type="error"></Alert>}
      <Form.Item
        placeholder="username..."
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
        id="email"
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input ref={emailRef} />
      </Form.Item>

      <Form.Item
        type="password"
        placeholder="password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
        id="Password"
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password ref={passwordRef} />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password ref={passwordConfirmRef} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 2,
        }}
      >
        <Button
          onClick={() => {
            creatUser();
          }}
          loading={loading}
          id="submit"
          type="primary"
          htmlType="submit"
        >
          Sign Up
        </Button>
        <br/>
        Or 
        <br/>
        <a href="/login">Login</a>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default Signup;
