import React, { PureComponent } from 'react';
// import { Row, Col, Form, Card, Select, Icon, Avatar, List, Tooltip, Dropdown, Menu } from 'antd';
import { Form, Input } from 'antd';

// eslint-disable-next-line no-unused-vars
import styles from './TodoList.less';

const FormItem = Form.Item;
class TodoList extends PureComponent {
  static handleSubmit() {}

  componentDidMount() {}

  render() {
    return (
      <div id="todoForm">
        <h1>todos</h1>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            <Input id="newTodo" />
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default TodoList;
