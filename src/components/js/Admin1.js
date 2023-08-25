import "../css/Admin1.css";
const Admin1 = () => {
  return (
    <div className="admin1">
      <b className="admin-portal">Admin Portal</b>
      <b className="resume-screening-web">Resume Screening Web App</b>
      <b className="past-jobs-created">{`Past Jobs Created `}</b>
      <div className="admin1-child" />
      <b className="python-developer">Python Developer</b>
      <div className="admin1-item" />
      <button className="button2">
        <b className="button3">Home</b>
      </button>
      <b className="student-name">{`Student Name `}</b>
      <b className="rank">Rank</b>
      <b className="resume-score">Resume Score</b>
      <div className="deep-vyas-parent">
        <b className="deep-vyas">Deep Vyas</b>
        <b className="b">90.89</b>
        <b className="b1">1</b>
      </div>
      <div className="gautam-soni-parent">
        <b className="deep-vyas">Gautam Soni</b>
        <b className="b">50.25</b>
        <b className="b1">2</b>
        <div className="samkit-shah-parent">
          <b className="deep-vyas">Samkit Shah</b>
          <b className="b">28.26</b>
          <b className="b1">3</b>
        </div>
      </div>
    </div>
  );
};

export default Admin1;
