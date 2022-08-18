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
        

              <div className="cards">
             
              <div className="abtServiceCard card-4">
                <div className="card__icon">
                <i class="fa-solid fa-briefcase"></i>
                </div>
             
                <h2 className="card__title">
                Part Time Job Opprtunities
                </h2>
              
              </div>
              <div className="abtServiceCard card-5">
                <div className="card__icon">
                <i class="fas fa-chart-line"></i>
                </div>
             
                <h2 className="card__title">
                Career Guidance
                </h2>
               
              </div>
              <div className="abtServiceCard card-1">
                <div className="card__icon">
                <i class="fa-solid fa-gears"></i>
                </div>
                
                <h2 className="card__title">
                Skill Development
                </h2>
               
              </div>
            </div>
            ) : (
              <div className="cards">
              <div className="abtServiceCard card-1">
                <div className="card__icon">
                <i class="fas fa-plane-departure"></i>
                </div>
              
                <h2 className="card__title">
                Recruitment
                </h2>
             
              </div>
              <div className="abtServiceCard card-2">
                <div className="card__icon">
                <i class="far fa-map"></i>
                </div>
            
                <h2 className="card__title">
                CAD Services
                </h2>
               
              </div>
              <div className="abtServiceCard card-3">
                <div className="card__icon">
                <i class="fa-brands fa-unity"></i>
                </div>
             
                <h2 className="card__title">3D Modelling</h2>
             
              </div>
            
            </div>
            )}
          </div>
        </section>

        <section className="vacncies">
        <div className="vacnciesContainer">
            <div className="vacanciesLeft">

            </div>

            <div className="vacanciesRight">
              
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
