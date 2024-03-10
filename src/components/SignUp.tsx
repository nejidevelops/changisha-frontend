import React from 'react';
import { Button, Form, Input } from 'antd';

function SignUp() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#faf5e9', paddingTop: '132px', paddingLeft: '123px' }}>
      <h2 style={{ fontSize: '28px' }}>Elevate Impact: Fundraise, Donate, Transform Lives!</h2>
      <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '115px' }}
      >
        <Form.Item
          name="first-name"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> First Name:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item
          name="last-name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> Last Name:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> Email:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item
          name="phone-number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> Phone Number:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> Username:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> Address:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> Password:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item
          name="confirm-password"
          rules={[{ required: true, message: 'Please input your confirm password!' }]}
        >
          <label><span style={{ color: 'red' }}>*</span> Confirm Password:</label>
          <Input style={{ marginTop: '11px' }} />
        </Form.Item>

        <Form.Item>
          <Button type="default" shape="round" style={{ backgroundColor: '#2272ff', color: 'white' }}>
            sign up
          </Button>
        </Form.Item>
      </Form>
      </div>
  </div>
  )
}

export default SignUp