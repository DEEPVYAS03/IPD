import "../css/Candidate.css";
import { Link } from "react-router-dom";
const Candidate = () => {
  return (
    <div className="candidate">
      <b className="student-portal1">Student Portal</b>
      <div className="resume-screening-web2">Resume Screening Web App</div>
      <div className="available-jobs">Available Jobs</div>
      <button className="button8">
      <Link to='/'><div className="button9">Log Out</div></Link>
      </button>
      <div className="candidate-child" />
      <div className="candidate-item" />
      <div className="python-developer2">Python Developer</div>
      <div className="web-developer">Web Developer</div>
      <button className="button10">
        <div className="button11">Apply</div>
      </button>
      <button className="button12">
        <div className="button11">Read JD</div>
      </button>
      <button className="button14">
        <div className="button11">Apply</div>
      </button>
      <button className="button16">
        <div className="button11">Read JD</div>
      </button>
    </div>
  );
};

export default Candidate;
