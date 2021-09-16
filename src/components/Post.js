import React from "react";
import {
  FaEllipsisH,
  FaStar,
  FaMapMarkerAlt,
  FaBookmark,
  FaFilePdf,
} from "react-icons/fa";
import { name, company, image, address, lorem } from "faker";

export default function Post() {
  const { firstName, lastName, jobTitle } = name;
  const { companyName } = company;
  const { avatar } = image;
  const { cityName, country } = address;
  const { paragraph } = lorem;

  return (
    <>
      <section className="newsFeed">
        <section className="post">
          <hr />
          <UserDetails
            avatar={avatar()}
            firstName={firstName()}
            lastName={lastName()}
            companyName={companyName()}
            jobTitle={jobTitle()}
            cityName={cityName()}
            icon={FaEllipsisH}
          />
          <hr />
          <p className="para"> {paragraph()} </p>
        </section>
        <Stats location={cityName()} country={country()} />
      </section>
    </>
  );
}

const UserDetails = (props) => {
  return (
    <span className="userDetails">
      <span className="group">
        <img
          src={props.avatar}
          alt="userImage                                                                                                                                                                                                                                                                                                          "
          className="profilePicture"
        />
        <span className="userName">
          <h3>
            {props.firstName} {props.lastName}
          </h3>
          <p>
            {" "}
            Works at
            <span className="companyName"> {props.companyName} </span>
            <p> As {props.jobTitle} </p>
          </p>{" "}
        </span>
      </span>
      <FaEllipsisH />
    </span>
  );
};

const Stats = (props) => {
  return (
    <section className="stats-container">
      <hr />
      <section className="stats">
        <span>
          <FaMapMarkerAlt style={{ marginTop: ".2em" }} /> {props.location},{" "}
          {props.country}{" "}
        </span>
        <span>
          <FaStar className="rating" /> <span className="rate">4.7</span>/5{" "}
        </span>
      </section>
      <section className="companyProfile">
        <span style={{padding: "10px"}}>
          <FaFilePdf /> Documents (867 KB)
        </span>
        <span>
          <a href="##" className="viewPost">
            {" "}
            <FaBookmark className="bookmark" /> Save for later{" "}
          </a>
          <a href="##" className="sendProposal">
            {" "}
            send proposal{" "}
          </a>
        </span>
      </section>
    </section>
  );
};
