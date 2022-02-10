import React from "react"
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"


class TodoContainer extends React.Component {

    //create a state of 3 obj todo in a list todos
  state = {
    todos: []
   };

   addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),

      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      
    });
    //localStorage.setItem("todos", JSON.stringify(this.state.todos))
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  }

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))

  };
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle;
          //localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
        
        return todo;
      }),
    })
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }
  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }
  componentWillUnmount() {
    console.log("Cleaning up...")
  }
  render() {

    return (
        <div className="container">
          <div className="inner">
           <Header />
           <InputTodo addTodoProps={this.addTodoItem}/>
        <TodosList  setUpdate={this.setUpdate} deleteTodoProps={this.delTodo} todos={this.state.todos} handleChangeProps={this.handleChange}/>
        </div>
      </div>
    );
  }

 
}
export default TodoContainer