import React from "react";
import Post from "./Post";
import { Redirect } from 'react-router-dom'
import CreatePost from "./CreatePost";
import ToLet from './ToLet';

export default function Home({authorized}) {
  return (
    <section className="bodyIntro">
      <section>
        <ToLet />
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
