import React, { useState } from 'react';

const App = () => {
  //set state of the tasks list and for the new task to be added
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  //function to handle the new task as the user puts in the input
  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  }
//function to add a new task to the task array and reset the input to clear
const addTask = () => {
  if (newTask.trim() !== "") {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
}

//display the list of tasks using map() in the tasks array
//add delete function

const deleteTask =(index)=>{
  const updatedTaskList = tasks.filter((_, i) => i !== index);
  setTasks(updatedTaskList);
}


  return (
    <div className='taskManager'>
      <h1>ABC Task Manager</h1>
      <div className="taskInput">
      <input type="text" value={newTask} placeholder='Enter New Task' onChange={handleNewTask} />
      <button id='addTask' onClick={addTask}>Add Task</button>
      </div>
      <div className="listDisplay">
      <ul>
        {
          tasks.map((task, index)=> (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
          ))
        }
      </ul>
      </div>
    </div>

  )
}

export default App