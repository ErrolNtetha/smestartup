import React, {useState} from "react";
import {
  FaEllipsisH,
  FaStar,
  FaMapMarkerAlt,
  FaRegEye,
  FaChevronDown,
  FaChevronUp,
  FaReply,
} from "react-icons/fa";
import { name, company, image, address, lorem } from "faker";
import { companyBrief as data } from '../data'

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
          <section>
            Works at
            <span className="companyName"> {props.companyName} </span>
            <p> As {props.jobTitle} </p>
          </section>
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
  const { paragraph } = lorem;


  return (
    <section className="dropDownArrowContainer">
      <section className="aarrowDown">
        <section className="arrowToggleWrapper" onClick={() => setShow(!show)} >
          { show ?
            <FaChevronUp  /> :  <FaChevronDown  />
            }
        </section>
        <section className={show ? 'compData' : 'data'}>
          <section>
            <h5 style={{marginTop: "10px", padding: "0"}}> Business Overview </h5>
            <p style={{fontSize: ".8rem", margin: "0", textAlign: "left", padding: "6px"}}> {paragraph()} </p>
          </section>
          {/* <section className="dataContainer">
            Put this code outside here and import and map using one "li" and key
            { data.map((item, key) => {
              return (
                <section className="actualData">
                  <ul className="dataList" key={item.id}>
                    <li> <span> Annual Sales </span> R{item.investmentAmount} </li>
                    <li> <span> Type of Company </span> {item.typeOfCompany} </li>
                    <li> <span> Area </span> {item.area} sqm. </li>
                    <li> <span> Established  </span> {item.establishedIn} </li>
                    <li> <span> Sector </span> {item.sector} </li>
                    <li> <span> Size </span> {item.numOfEmployees} </li>
                  </ul>
                </section>
              )
            })}
          </section> */}
        </section>
      </section>
      <section id="companyData" className={style}>  
          <input type="text" className="inputField" name="comment" placeholder="Comment on this post..." />
          <span className="icon">
             <FaReply />
          </span>
      </section>
    </section>
  )
}
