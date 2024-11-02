"use client";

import React, { useEffect, useState } from "react";
import PostInput from "./PostInput";
import Post from "./Post";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";

const PostFeed = () => {
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs;

      setPosts(snapshotDocs);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="flex-grow border-x border-gray-100 max-w-2xl">
      <div className="py-4 px-3 text-l sm:text-xl sticky z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold border-b border-gray-100">
        Home
      </div>
      <PostInput />
      {posts.map((post) => (
        <Post key={post.id} data={post.data()} id={post.id} />
      ))}
    </div>
  );
};

export default PostFeed;
