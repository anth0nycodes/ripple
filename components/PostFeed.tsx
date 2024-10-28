import React from "react";
import PostInput from "./PostInput";
import Post from "./Post";

const PostFeed = () => {
  return (
    <div className="flex-grow border border-black max-w-2xl">
      <div className="py-4 px-3 text-l sm:text-xl sticky z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold">
        Home
      </div>
      <PostInput />
      <Post />
    </div>
  );
};

export default PostFeed;
