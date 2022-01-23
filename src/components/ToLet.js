import React, {useState} from "react";
import {
  FaEllipsisH,
  FaStar,
  FaMapMarkerAlt,
  FaRegEye,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { name, company, image, address, lorem } from "faker";
import { companyBrief as data } from '../data'
import Modal from "./Modal";

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
          </section>
          <section>
              29 minutes ago
          </section>
        </span>
      </span>
      <FaEllipsisH className="ellipsis" />
    </span>
  );
};

const Stats = (props) => {
  const [ showModal, setShowModal ] = useState(false);


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
          <button className="sendProposal" onClick={() => setShowModal(!showModal)}>
            contact business
          </button>
        </span>
      </section>
      { showModal && <Modal /> }
      <DropdownArrow />
    </section>
  );
};

const DropdownArrow = () => {
  // const style = {
  //   display: "none",
  // }

  const [show, setShow] = useState(false);
  // const [reply, setReply] = useState('');
  // let [message, setMessage] = useState([]);

  const { paragraph } = lorem;

  // const replyPost = (e) => {

  //   // On submit of this text input, append it in the dom
  //   setMessage(reply);
  //   setReply('')
  
  //   console.log('Button clicked... ', reply)
  // }

  const { investmentAmount, typeOfCompany, area, establishedIn, sector, numOfEmployees, id } = data[0];


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
            <h5 style={{marginTop: "10px", marginBottom: "10px" , padding: "0"}}> Business Overview </h5>
            <p style={{fontSize: ".8rem", margin: "0", textAlign: "left", padding: "6px"}}> {paragraph()} </p>
          </section>
          <section className="dataContainer">
                <section className="actualData">
                  <ul className="dataList" key={id}>
                    <li> <span> Annual Sales </span> R{investmentAmount} </li>
                    <li> <span> Type of Company </span> {typeOfCompany} </li>
                    <li> <span> Area </span> {area} sqm. </li>
                    <li> <span> Established  </span> {establishedIn} </li>
                    <li> <span> Sector </span> {sector} </li>
                    <li> <span> Size </span> {numOfEmployees} </li>
                  </ul>
                </section>
          </section>
        </section>
        {/* <section className="repliesContainer">
          <div>
          { message }
          </div>
        </section> */}
      </section>
      {/* <section id="companyData" className={style}>  
          <input type="text" value={reply} className="inputField" onChange={(e) => setReply(e.target.value)} name="comment" placeholder="Send reply..." />
          <span className="icon" onClick={replyPost}>
             <FaReply />
          </span>
      </section> */}
    </section>
  )
}