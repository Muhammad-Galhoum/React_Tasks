import { useState } from "react"
import { Input } from "../Input"

export const Add = (props) => {
const [todo, setTodo] = useState("Task Name")
const [desc, setDesc] = useState("Description")
    
const handleSubmit = () => {
    props.onAdd({todo, desc})
}

    return ( <>
    <h1>Add task</h1>
    <Input value={todo} label="Todo" setValue={setTodo}/>
    <Input value={desc} label="Description" setValue={setDesc}/>
    
    <button className="btn btn-primary col-12" onClick={handleSubmit}>Add</button>
    </>)
}