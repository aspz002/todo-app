
import React, { Component } from 'react'
import styles from "./TodoItem.module.css"
import { RiDeleteBinLine } from "react-icons/ri"

export class TodoItem extends Component {
  state = {
    editing: false,
  }
  //handle the editing mode, remove te
  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div style={viewMode} onDoubleClick={this.handleEditing}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button className={styles.delete} onClick={() => this.props.deleteTodoProps(id)}>
            <RiDeleteBinLine/>
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input type="text"
          style={editMode}
          className={styles.textInput}
          value={title} 
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
          />
      </li>);
  }
}

export default TodoItem