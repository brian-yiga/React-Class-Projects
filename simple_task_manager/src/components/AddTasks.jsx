import React, {useState} from 'react'

const AddTasks = () => {
    const [task, setTask] = useState("")
    const handleInputChange = (e) => {
        setTask(e.target.value)
    }
  return (
    <div>
        
            <input type="text" value={task} onChange={handleInputChange}/>
            <button>Add Task</button>
      
    </div>
  )
}

export default AddTasks