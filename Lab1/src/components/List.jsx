export const List = (props) => {
  return (
    <div>
     <dl>
      <dt><h2>{props.title}</h2></dt>
      <dd><b><i>{props.body}</i></b></dd>
      </dl>
    </div>
  );
};
