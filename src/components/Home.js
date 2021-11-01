import React from "react";
import Post from "./Post";
import { Redirect } from 'react-router-dom'
import CreatePost from "./CreatePost";

export default function Home({authorized}) {
  if(!authorized) {
    <Redirect to="/home" />
  }
  
  return (
    <section className="bodyIntro">
      <section>
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
