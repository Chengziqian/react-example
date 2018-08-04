import React from 'react'

class myGrade extends React.Component {
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
    return (
      <div>
        <div>
          添加成绩：
          <label><input id="math" type="checkbox" name="course" onChange={this.handleCheck}/>数学</label>
          <label><input id="chinese" type="checkbox" name="course" onChange={this.handleCheck}/>语文</label>
          <label><input id="english" type="checkbox" name="course" onChange={this.handleCheck}/>英语</label>
          {this.state.show.math &&
          <div className="formItem">
            <label htmlFor="math">数学:</label>
            <input id="math" name="math" onInput={this.handleInput} value={this.state.grade.math}/>
          </div>
          }
          {this.state.show.chinese &&
          <div className="formItem">
            <label htmlFor="chinese">语文:</label>
            <input id="chinese" name="chinese" onInput={this.handleInput} value={this.state.grade.chinese}/>
          </div>
          }
          {this.state.show.english &&
          <div className="formItem">
            <label htmlFor="english">英语:</label>
            <input id="english" name="english" onInput={this.handleInput} value={this.state.grade.english}/>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default myGrade