import React from 'react';
import { Button, Form, Input } from 'antd';

function SignUp() {
  return (
    <div className='auth-signup-container'>
      <h2>Elevate Impact: Fundraise, Donate, Transform Lives!</h2>
      <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className='auth-signup-form'
      >
        <Form.Item
          name="first-name"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <label><span>*</span> First Name:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="last-name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <label><span>*</span> Last Name:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <label><span>*</span> Email:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="phone-number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <label><span>*</span> Phone Number:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <label><span>*</span> Username:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <label><span>*</span> Address:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <label><span>*</span> Password:</label>
          <Input />
        </Form.Item>

        <Form.Item
          name="confirm-password"
          rules={[{ required: true, message: 'Please input your confirm password!' }]}
        >
          <label><span>*</span> Confirm Password:</label>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="default" shape="round" >
            sign up
          </Button>
        </Form.Item>
      </Form>
      </div>
  </div>
  )
}

export default SignUp