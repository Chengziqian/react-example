import React from 'react'
import { Form, Checkbox, Input } from 'antd';
const FormItem = Form.Item;
class antGrade extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grade: {
        math: '',
        chinese: '',
        english: ''
      },
      show: {
        math: false,
        chinese: false,
        english: false
      }
    }
  }

  handleCheck = (e) => {
    let show = this.state.show
    let grade = this.state.grade
    let id = e.target.id
    show[id] = !show[id]
    if(!show[id]) {
      grade[id] = ''
      this.setState({grade})
    }
    this.setState(show)
    this.props.handleGrade(this.state.grade)
  }

  handleInput = (e) => {
    let grade = this.state.grade
    let name = e.target.name
    grade[name] = e.target.value
    this.setState({grade})
    this.props.handleGrade(this.state.grade)
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
      <div>
        <FormItem
          {...formItemLayout}
          label="添加成绩"
        >
          <Checkbox id="math" onChange={this.handleCheck}>数学</Checkbox>
          <Checkbox id="chinese" onChange={this.handleCheck}>语文</Checkbox>
          <Checkbox id="english" onChange={this.handleCheck}>英语</Checkbox>
        </FormItem>
        {this.state.show.math &&
        <FormItem
          {...formItemLayout}
          label="数学"
        >
          <Input name="math" onInput={this.handleInput} value={this.state.grade.math}/>
        </FormItem>
        }
        {this.state.show.chinese &&
        <FormItem
          {...formItemLayout}
          label="语文"
        >
          <Input name="chinese" onInput={this.handleInput} value={this.state.grade.chinese}/>
        </FormItem>
        }
        {this.state.show.english &&
        <FormItem
          {...formItemLayout}
          label="英语"
        >
          <Input name="english" onInput={this.handleInput} value={this.state.grade.english}/>
        </FormItem>
        }
      </div>
    )
  }
}

export default antGrade