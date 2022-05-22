import React from "react";
import "./Trainers.css";
const Trainers = () => {
  return (
    <div className="trainers">
      <h3 className="h3 text-center text-uppercase fw-bold my-5">Experts</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="trainer-wrapper">
              <div className="img-trainer">
                <img
                  className="img-fluid w-75 d-block m-auto"
                  src="https://img.freepik.com/free-photo/image-handsome-caucasian-man-party-suit-smiling-pleased-attend-formal-event-standing-white-background_1258-64650.jpg?t=st=1650303448~exp=1650304048~hmac=967a00c44f031340144848d6cd7c328610dc4b96f90a4178bdd3e7c7988bbff1&w=1800"
                  alt=""
                />
              </div>
              <h4 className="h4 mt-3 text-center">David</h4>
              <p className="lead  text-center">Data Science Specialist</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="trainer-wrapper">
              <div className="img-trainer">
                <img
                  className="img-fluid w-75 d-block m-auto"
                  src="https://img.freepik.com/free-photo/image-beautiful-adult-asian-woman-showing-thumbs-up-wearing-formal-office-university-clothing-recommending-company-standing-white-background_1258-89325.jpg?t=st=1650303448~exp=1650304048~hmac=5c317b31414aa04a9edf9fd2983963eb97b9f539cf264910f516c884bb920428&w=1800"
                  alt=""
                />
              </div>
              <h4 className="h4 mt-3 text-center">Angela</h4>
              <p className="lead  text-center">Supply Chain Manager</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="trainer-wrapper">
              <div className="img-trainer">
                <img
                  className="img-fluid w-75 d-block m-auto"
                  src="https://img.freepik.com/free-photo/image-impressed-african-american-business-lady-holds-paper-cup-smartphone_273609-43336.jpg?t=st=1650303448~exp=1650304048~hmac=d38fcec18ae5e10bae062c202fbe7c5f656f39d027287f247911c33fd52bf02f&w=1800"
                  alt=""
                />
              </div>
              <h4 className="h4 mt-3 text-center">Aleya</h4>
              <p className="lead  text-center">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trainers;
