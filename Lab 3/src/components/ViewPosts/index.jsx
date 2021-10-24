import { Post } from "../Post";

export const ViewPosts = (props) => {
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>Hello from the app</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.posts.map((p, i) => (
        <Post key={i} title={p.title} body={p.body} />
      ))}
    </div>
  );
};