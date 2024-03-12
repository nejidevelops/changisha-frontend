import React from 'react';
import { Button, Form, Input } from 'antd';
import website from '../assets/sign-in 1.svg';

const SignIn: React.FC = () => (
  <div className='auth-container'>
    <div className='auth-container_div'>
      <img src={website} alt="Login Illustration Image" />
    </div>
    <div className='auth-form-container'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <label><span>*</span> Username:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <div className='auth-label'>
            <label><span>*</span> Password:</label>
            <a href="#">Forgot password?</a>
          </div>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="default" shape="round">
            Sign In
          </Button>
        </Form.Item>

        <div  className="auth-signup">
          <span>Not yet signed up? <a href="">Sign-up Now</a></span>
        </div>
      </Form>
    </div>
  </div>
);

export default SignIn;
