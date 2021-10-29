import { useState } from "react";
import { Add } from "../../components/Add";
import { View } from "../../components/ViewTodo";

export const Posts = ()=> {
    const [posts, setState] = useState([])

    const handleAdd = (newPost) => {
      setState([newPost, ...posts])
    }

    const handleRemove = (newPosts) => {
      setState([...newPosts])
    }

    const handleDelete = () => {
      setState([])
    }
  return (<div className="row">

    <div className="col-6 mt-6">
        <Add onAdd={handleAdd}/>
    </div>

    <div className="col-6">
        <View onDelete={handleDelete} posts={posts} onRemove={handleRemove}/>
    </div>

</div>)
}