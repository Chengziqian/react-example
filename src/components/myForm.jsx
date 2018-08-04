import React from 'react'
import './myForm.less'
import Mygrade from './myGrade'
class myForm extends React.Component {
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
    return (
      <form className="myform">
        <div className="formItem">
          <label htmlFor="name">姓名:</label>
          <input id="name" name="name" value={this.state.name} onInput={this.handleData}/>
        </div>
        <div className="formItem">
          <label htmlFor="class">班级:</label>
          <input id="class" name="class" value={this.state.class} onInput={this.handleData}/>
        </div>
        <div className="formItem">
          <label htmlFor="id">学号:</label>
          <input id="id" name="id" value={this.state.id} onInput={this.handleData}/>
        </div>
        <Mygrade handleGrade={this.handleGrade.bind(this)}/>
        <p>{JSON.stringify(this.state)}</p>
      </form>
    )
  }
}

export default myForm