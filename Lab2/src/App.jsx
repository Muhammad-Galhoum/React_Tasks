import { AddTask } from "./components/Add";
import { useState } from "react";
import { ViewList } from "./components/ViewTodoList";

export const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newStudent) => {
    setTasks([...tasks, newStudent]);
  };

  const handleDelete = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className = "mt-2">Add New Task</h1>
          <AddTask addnewtask={addTask} />
        </div>
        <div className="col-6">
          <h1 className = "mt-2">View Tasks</h1>
          <button className="btn btn-danger m-2" onClick={handleDelete}>
            Delete All Tasks
          </button>
          <table className="table" style={{ color: "blue", backgroundColor:"#eb4034"}}>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <ViewList mytasks={tasks} />
          </table>
        </div>
      </div>
    </div>
  );
};