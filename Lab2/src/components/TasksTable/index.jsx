export const TsTable = (props) => {
  return (
    <tr>
      <td>{props.taskname}</td>
      <td>{props.taskDesc}</td>
      <td>
        <button className="btn btn-warning m-1" onClick={props.removeoldtask}>
          X
        </button>
      </td>
    </tr>
  );
};