import { Input } from "./../Input";
import { useState } from "react";

export const AddTask = (props) => {
  const [taskname, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleSubmit = () => {
    props.addnewtask({ taskname, taskDesc});
  };

  return (
    <div className="card p-3 m-2" style={{ height: "29vh", backgroundColor:"#5bebf5"  }}>
      <Input
        value={taskname}
        setValue={setTaskName}
        label="Task Name"
        placeholder={"Enter Your Task Name"}
      />
      <Input
        value={taskDesc}
        setValue={setTaskDesc}
        label="Description"
        placeholder={"Enter Your Task Description"}
      />
    
      <button onClick={handleSubmit} className="btn btn-primary">
        Add New Task
      </button>
    </div>
  );
};