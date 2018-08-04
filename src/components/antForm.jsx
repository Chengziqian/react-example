import React from 'react'
import { Form, Input} from 'antd';
import AntGrade from './antGrade'
const FormItem = Form.Item;
class antForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      class: "",
      id: "",
      grade: {}
    }
  }

  handleGrade = function (val) {
    this.setState({grade: val})
  }

  handleData = (e) => {
    let target = e.target
    let name = e.target.name
    this.setState({[name]: target.value})
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    }
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="姓名"
        >
          <Input name="name" onInput={this.handleData}/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="班级"
        >
          <Input name="class" onInput={this.handleData}/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="学号"
        >
          <Input name="id" onInput={this.handleData}/>
        </FormItem>
        <AntGrade handleGrade={this.handleGrade.bind(this)}/>
        <p>{JSON.stringify(this.state)}</p>
      </Form>
    )
  }
}

export default antForm