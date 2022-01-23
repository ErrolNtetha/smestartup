import React, {useState, useEffect} from "react";
import { ClipLoader } from 'react-spinners';
import {
  FaEllipsisH,
  FaStar,
  FaMapMarkerAlt,
  FaRegEye,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle,
} from "react-icons/fa";
import { name, company, image, address, lorem } from "faker";
import { companyBrief as data } from '../data'
import Modal from "./Modal";

export default function Post({ post }) {
  // define the states
  const { firstName, lastName, jobTitle } = name;
  const { companyName } = company;
  const { avatar } = image;
  const { cityName, country } = address;
  const { paragraph } = lorem;
  const [ loader, setLoader ] = useState(true);

  // when the compnent mounts
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000)
  }, []);

  return (
    <section className='bodyIntro'>
      <section className="newsFeed">
      {loader ? <span> <ClipLoader size={18} className='spinner' /> </span> :
        (
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
          <p className="para"> {post} </p>
        </section>
        )}
        <Stats location={cityName()} country={country()} />
      </section>
    </section>
  );
}

const UserDetails = ({firstName, lastName, companyName}) => {
  return (
    <span className="userDetails">
      <span className="group">
        <img
          
          alt="userImage                                                                                                                                                                                                                                                                                                          "
          className="profilePicture"
        />
        <span className="userName">
          <h3>
            {firstName} {lastName}
          </h3>
          <section>
            Works at
            <span className="companyName"> {companyName} </span>
          </section>
          <section>
              53 minutes ago
          </section>
        </span>
      </span>
      <FaEllipsisH className="ellipsis" />
    </span>
  );
};

const Stats = (props) => {
  const [ showModal, setShowModal ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      console.log('Loading');
      setLoading(false);
    }, 5000);
  }, [])

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
       {
         loading ? 'Loading' :
         <span className="actionBtn">

        {/* onClick={() => setShowModal(!showModal)} */}
         <button className="sendProposal" onClick={id => console.log(id)}>
           add to bookmarks
         </button>
       </span>
       }
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
            { data.map((item, key) => {
              return (
                <section className="actualData">
                  <ul className="dataList" key={item.id}>
                    <li> <span> <p> Annual Sales </p> <FaInfoCircle /> </span> R{item.investmentAmount} </li>
                    <li> <span> Type of Company </span> {item.typeOfCompany} </li>
                    <li> <span> Area </span> {item.area} sqm. </li>
                    <li> <span> Established  </span> {item.establishedIn} </li>
                    <li> <span> Sector </span> {item.sector} </li>
                    <li> <span> Size </span> {item.numOfEmployees} </li>
                  </ul> 
                </section>
              )
            })}
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
