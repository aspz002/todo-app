import React, { Component } from "react"
import { IoIosAddCircleOutline } from "react-icons/io"

class InputTodo extends Component {
    state = {
        title: ""
      };
  onChange = e => {
    this.setState({
      title: e.target.value
      
    });
  };
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }
  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit} >
        <input  className="input-text" type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}/>
        <button className="input-submit"><IoIosAddCircleOutline /></button>
      </form>
    )
  }

}
export default InputTodo