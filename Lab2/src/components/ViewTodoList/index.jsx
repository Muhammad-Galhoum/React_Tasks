import { TsTable } from "../TasksTable";
export const ViewList = (props) => {
  const removeTask = (e) => {
    e.target.parentElement.parentElement.remove();
  };
  return (
    <>
      <tbody>
        {props.mytasks.map((ts) => {
          return (
            <TsTable
              removeoldtask={removeTask}
              taskname={ts.taskname}
              taskDesc={ts.taskDesc}
            />
          );
        })}
      </tbody>
    </>
  );
};