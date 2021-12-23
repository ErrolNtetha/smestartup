import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Redirect } from 'react-router-dom'
import CreatePost from "./CreatePost";
import ToLet from './ToLet';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  // const [ loader, setLoader ] = useState(false);

  // useEffect(() => {
  //   setLoader(true)
  //   setTimeout(() => {
  //     setLoader(false)
  //   }, 5000)
  // }. [])
 
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
