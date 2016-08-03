import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
let Demo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', 'asdas');
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="姓名">
          <Input placeholder="请输入账户名"/>
        </FormItem>
        <FormItem label="帐号">
          <Input type="text" placeholder="请输入账户"/>
        </FormItem>
        <Button type="primary" htmlType="submit">查询</Button>
      </Form>
    );
  }
});

// Demo = Form.create()(Demo);

export default Demo;
