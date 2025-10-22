import React, { useTransition } from 'react'
import { useState } from 'react'
const TodoList = () => {

    let [todos, steTodos]= useState(["sample task"])
    let [newTodo , setNewTodo] = useState("")

    let addtask=()=>{
        steTodos([...todos, newTodo])
        
    }

    let update=(event)=>{
        setNewTodo(event.target.value)
    }
  return (
    <div>
        <input  placeholder='Type here...' onChange={update} /> <br />
        <button onClick={addtask}>Add task</button>
        <br /><br /><br /><br /><br />  
      <h3>Task todo </h3>
    <hr/>
      <ul> 
       {todos.map((todo) => (
        <li>{todo}</li>
      ))}

      </ul>
    </div>
  )
}

export default TodoList
