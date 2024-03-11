import React from 'react';
import { Button, Form, Input } from 'antd';
import forgot from '../assets/Forgot password-rafiki 1.svg';

const ForgotPassword: React.FC = () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ backgroundColor: '#28282B', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={forgot} alt="Login Illustration Image" style={{ width: '500px', height: '500px' }} />
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
        <h2 style={{ fontSize: '24px' }}>Forgot Password? Get reset instructions</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <label style={{ display: 'block', marginBottom: '8px' }}><span style={{ color: 'red' }}>*</span> email:</label>
          <Input placeholder='johndoe@gmail.com' style={{width: '125%'}} />
        </Form.Item>

        <Form.Item>
          <Button type="default" shape="round" style={{ backgroundColor: '#2272ff', color: 'white', marginTop: '1rem' }}>
            reset password
          </Button>
        </Form.Item>

        <div style={{ paddingTop: '5rem' }}>
          <span  style={{ color: '#959ca2' }}>Not yet signed up? <a href="" style={{ fontWeight: 'bold', color: '#3c3e3f' }}>Sign-up Now</a></span>
        </div>
      </Form>
    </div>
    {/*
      </div>
    </div> */}
  </div>
);

export default ForgotPassword;
