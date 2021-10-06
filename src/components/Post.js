import React, {useState} from "react";
import {
  FaEllipsisH,
  FaStar,
  FaMapMarkerAlt,
  FaRegEye,
  FaChevronDown,
  FaReply
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
            {/* <p> As {props.jobTitle} </p> */}
          </p>{" "}
        </span>
      </span>
      <FaEllipsisH className="ellipsis" />
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
          {props.country}
        </span>
        <span>
          <FaStar className="rating" /> <span className="rate">4.7</span>/5{" "}
        </span>
      </section>
      <section className="companyProfile">
        <span style={{padding: "10px"}}>
          <a href="/documents" className="docAttachments">
            <FaRegEye className="docAttachements" /> 2.4K views
          </a>
        </span>
        <span className="actionBtn">
          {/* <a href="##" className="viewPost">
            {" "}
            <FaBookmark className="bookmark" /> Save for later{" "}
          </a> */}
          <a href="##" className="sendProposal">
            {" "}
            send proposal{" "}
          </a>
        </span>
      </section>
      <DropdownArrow />
    </section>
  );
};

const DropdownArrow = () => {
  const style = {
    display: "none",
  }

  const [show, setShow] = useState(false)

  return (
    <section className="dropDownArrowContainer">
      <section className="aarrowDown">
        <FaChevronDown onClick={() => setShow(!show)} />
        <section className={show ? 'compData' : 'data'}>
          <p > This is data </p>
        </section>
      </section>
      <section id="companyData" className={style}>  
          <FaReply className="icon" />
        <input type="text" name="comment" placeholder="Send a reply..." id="" />
      </section>
    </section>
  )
}
