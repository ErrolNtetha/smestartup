import React from "react";
import Post from "./Post";
import { Redirect } from 'react-router-dom';
import CreatePost from "./CreatePost";
import { BeatLoader } from 'react-spinners';
import ToLet from './ToLet';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

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
