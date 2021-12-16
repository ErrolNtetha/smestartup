import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Redirect } from 'react-router-dom'
import CreatePost from "./CreatePost";
import ToLet from './ToLet';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const [post, setPost] = useState([]);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  // const [ loader, setLoader ] = useState(false);

  // useEffect(() => {
  //   setLoader(true)
  //   setTimeout(() => {
  //     setLoader(false)
  //   }, 5000)
  // }. [])
  const url = 'http://localhost:5000/feed'

  useEffect(() => {
     async function fetchData() {
       await axios.get(url)
        .then(res => console.log(res.data))
        .catch(e => console.log(e)) 
     }
     fetchData()
  }, [])

  async function getData() {
    console.log(post)
  }

  return (
    <section className="bodyIntro">
      <section>
        <section>
          <button onClick={getData}> Get posts </button>
        </section>
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
