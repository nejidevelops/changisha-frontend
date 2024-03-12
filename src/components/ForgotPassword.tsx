import React from 'react';
import { Button, Form, Input } from 'antd';
import forgot from '../assets/Forgot password-rafiki 1.svg';

const ForgotPassword: React.FC = () => (
  <div className='auth-container'>
    <div className='auth-container_div'>
      <img src={forgot} alt="Login Illustration Image" />
    </div>
    <div className='auth-form-container'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        >
        <h2>Forgot Password? Get reset instructions</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <label><span>*</span> email:</label>
          <Input placeholder='johndoe@gmail.com' />
        </Form.Item>

        <Form.Item>
          <Button type="default" shape="round">
            reset password
          </Button>
        </Form.Item>

        <div className="auth-signup">
          <span>Not yet signed up? <a href="" >Sign-up Now</a></span>
        </div>
      </Form>
    </div>
  </div>
);

export default ForgotPassword;
