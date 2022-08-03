import "./css/LandingPage.css";
import React, { useState} from "react";
import "./css/LandingPage.css";
import NavPrimary from "../../Components/NavBarPrimary/NavPrimary";
import Footer from "../../Components/Footer/Footer";
function LandingPage() {
  const [serviceBtnState, setServiceBtnState] = useState(false);

  let btnId = "activeBtn";

  if (serviceBtnState) {
    btnId = "inactive";
  }


  return (
    <div>
      {/* nav end */}

      <div className="landingPageContainer">
        <div className="bannerContainer">
          <NavPrimary />

          <div className="bannerTxt">
            <h1 className="heading">
              {" "}
              <span className="weTakeYou"> sell your </span> <br />{" "}
              <span className="higher"> SKILLS </span>
            </h1>
            <br />

          
            <br />
          </div>
        </div>

        <section className="whoSec">
          <div className="whoContainer">
            <div className="whoLeft">
              <h2 className="whoTxt" style={{ marginTop: "5%" }}>
                Who We <br />
                Are ?
              </h2>
            </div>

            <div className="whoRight">
              <p>
                We are a remote engineering service firm providing services to
                employers and opportunities to employees
              </p>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="serviceContainer">
            <h2>Our Services</h2>

            <div className="optionBtnDiv">
              <button
                className="optionBtn "
                id={btnId}
                onClick={(e) => setServiceBtnState(false)}
              >
                For Employers
              </button>

              <button
                className="optionBtn"
                onClick={(e) => setServiceBtnState(true)}
              >
                For Employees
              </button>
            </div>
          </div>
          <div className="servicesBottom">
            {serviceBtnState ? (
              <div className="servicesList">
                <ul className="serviceCard-wrapper">
                  <li className="serviceCard">
                    <img
                      className="img"
                      src={process.env.PUBLIC_URL + "/jobService.jpg"}
                      alt
                    />
                    <h3>
                      <a href>Part Time Job Opprtunities</a>
                    </h3>
                  </li>

                  <li className="serviceCard">
                    <img
                      className="img"
                      src={
                        process.env.PUBLIC_URL + "/careerGuidanceService.jpg"
                      }
                      alt
                    />
                    <h3>
                      <a href>Career Guidance</a>
                    </h3>
                  </li>

                  <li className="serviceCard">
                    <img
                      className="img"
                      src={process.env.PUBLIC_URL + "/3dMOdellingService.svg"}
                      alt
                    />
                    <h3>
                      <a href>Skill Development</a>
                    </h3>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="servicesList">
                <ul className="serviceCard-wrapper">
                  <li className="serviceCard">
                    <img
                      className="img"
                      src={process.env.PUBLIC_URL + "/recruitService.jpg"}
                      alt
                    />
                    <h3>
                      <a href>Recruitment</a>
                    </h3>
                  </li>

                  <li className="serviceCard">
                    <img
                      className="img"
                      src={process.env.PUBLIC_URL + "/cadService.svg"}
                      alt
                    />
                    <h3>
                      <a href>CAD Services</a>
                    </h3>
                  </li>

                  <li className="serviceCard">
                    <img
                      className="img"
                      src={process.env.PUBLIC_URL + "/3dMOdellingService.svg"}
                      alt
                    />
                    <h3>
                      <a href>3D Modelling</a>
                    </h3>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
