import React from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  return (
    <section>
      <section>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <CreatePost />
      </section>
    </section>
  );
}
