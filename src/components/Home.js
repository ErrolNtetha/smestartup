import React from "react";
import { FaSearch } from 'react-icons/fa'
import Post from "./Post";
import faker from "faker";

export default function Home() {
  return (
    <section className="bodyIntro">
      <section>
        <span className="filteredSearch"></span>
        {/* <section className="filterOptions">
          <span className="dropDownFilter">
            <p> Search By </p>
            <select className="selectors">
              <option> Investor </option>
              <option> Company </option>
              <option> Business Type </option>
              <option> None </option>
            </select>
          </span>

          <a href="##"> Layout </a>
        </section>
        <hr /> */}
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
