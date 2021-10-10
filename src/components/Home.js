import React from "react";
import Post from "./Post";
import { Redirect } from 'react-router-dom'

export default function Home({authorized}) {
  if(!authorized) {
    <Redirect to="/messages" />
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
      </section>
    </section>
  );
}
