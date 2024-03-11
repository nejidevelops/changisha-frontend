import React from 'react';
import { Button, Form, Input } from 'antd';
import website from '../assets/sign-in 1.svg';

const SignIn: React.FC = () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ backgroundColor: '#28282B', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={website} alt="Login Illustration Image" style={{ width: '500px', height: '500px' }} />
    </div>
    <div style={{ width: '50%', display: 'flex', alignItems: 'center', backgroundColor: '#faf5e9' }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ paddingLeft: '5rem' }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <label style={{ display: 'block', marginBottom: '8px' }}><span style={{ color: 'red' }}>*</span> Username:</label>
          <Input style={{width: '250%'}} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <div style={{ width: '250%', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <label><span style={{ color: 'red' }}>*</span> Password:</label>
            <a href="#" style={{ color: '#959ca2' }}>Forgot password?</a>
          </div>
          <Input.Password style={{width: '250%'}} />
        </Form.Item>

        <Form.Item>
          <Button type="default" shape="round" style={{ backgroundColor: '#2272ff', color: 'white', marginTop: '1rem' }}>
            Sign In
          </Button>
        </Form.Item>

        <div style={{ paddingTop: '5rem' }}>
          <span  style={{ color: '#959ca2' }}>Not yet signed up? <a href="" style={{ fontWeight: 'bold', color: '#3c3e3f' }}>Sign-up Now</a></span>
        </div>
      </Form>
    </div>
  </div>
);

export default SignIn;
