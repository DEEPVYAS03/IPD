import "../css/Admin.css";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div className="admin">
      <b className="admin-portal1">Admin Portal</b>
      <div className="resume-screening-web3">Resume Screening Web App</div>
      <div className="post-a-job">{`Post a JOB `}</div>
      <div className="past-jobs-created1">{`Past Jobs Created `}</div>
      <input
        className="email-address"
        type="text"
        placeholder="Enter a Job Profile"
      />
      <input
        className="passwordx"
        type="text"
        placeholder="Enter the Required Job Keywords"
      />
      <button className="button18">
        <div className="button19">Create</div>
      </button>
      <Link to='/'><button className="button20">
        <div className="button19">Log Out</div>
      </button></Link>
      <div className="vector-parent">
        <img className="group-child" alt="" src="/vector-1.svg" />
        <div className="group-item" />
        <div className="or">or</div>
      </div>
      <img className="admin-child" alt="" src="/line-1.svg" />
      <div className="admin-item" />
      <div className="admin-inner" />
      <div className="python-developer3">Python Developer</div>
      <div className="web-developer1">Web Developer</div>
      <button className="button22">
        <div className="button23">Check Details</div>
      </button>
      <div className="rectangle-div" />
      <div className="web-developer2">Web Developer</div>
      <button className="button24">
        <div className="button23">Check Details</div>
      </button>
      <div className="upload-jd-in-container">
        <span>{`Upload JD in PDF Format `}</span>
        <span className="span">{`:  `}</span>
      </div>
    </div>
  );
};

export default Admin;
