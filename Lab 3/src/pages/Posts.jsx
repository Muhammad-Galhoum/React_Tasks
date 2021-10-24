import { useState } from "react";
import { ViewPosts } from "../components/ViewPosts";
import { AddPost } from "../components/AddPost";

export const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const handleDelete = () => {
    setPosts([]);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <h1>Posts-Page</h1>
      <div className="row">
        <div className="col-6">
          <AddPost addPost={addPost} />
        </div>
        <div className="col-6">
          <ViewPosts posts={posts} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};