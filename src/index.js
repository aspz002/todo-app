import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"
import "./App.css"
//add strict mode in index
ReactDOM.render(
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
  )

//component file
ReactDOM.render(<TodoContainer />, document.getElementById("root"))