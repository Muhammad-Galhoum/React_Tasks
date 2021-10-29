import { Todo } from "../Todo"

export const View = (props) => {
    return(<>
    <h1>To do list</h1>
    <button className="btn btn-danger" onClick={props.onDelete}>Delete</button>
    {props.posts.map((p) => <Todo todo={p.todo} desc={p.desc} onRemove={props.onRemove} posts={props.posts}/>)}
    </>)
}