import React, { useEffect, useState } from "react";
import CardComponents from "../../Components/CardComponents/CardComponents";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import SkillTest from "../../Components/SkillTest/SkillTest";
import '../../../src/dailyJobVacancies-28-09-2022.pdf' 
import "./ProductsPage.css";

function ProductsPage() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className="skill-job-wrapper">
        <div className="jobs-wrapper">
          <CardComponents />
        </div>

        {dimensions.width > 900 ? (
          <div className="skills-externalJobs-wrapper">
            <div className="externalJobs">
              <h2>More job opportunities from external sources</h2>
              <a href="https://drive.google.com/file/d/1z0qzL7BZOrtEYaPPNyrp2U1T2VLuq0KV/view?usp=sharing"  download>
                <button className="addBtn btn btn-primary">
                Download File
                </button>
                 </a>

            </div>
            <div className="skills-wrapper">
           <h2>Test Your Skills And Win More Jobs !! </h2>
          <a href="/skill_test"> <button className="addBtn btn btn-primary">
                Take Your Typing Speed Test
                </button> </a>
            </div>
          </div>
        ) : (
          <div className="skills-mobile">
                    <div className="externalJobs">
              <h2>More job opportunities from external sources</h2>
              <a href="../../../src/dailyJobVacancies-28-09-2022.pdf"  download>
              <button className="addBtn btn btn-primary">
                Download File
                </button>
                
              </a>
            </div>
            <h2 style={{ color: "#7523CC" }} className="title">
              skill Test
            </h2>

            <p>
              Please open this website in a computer to have your typing speed
              test.
            </p>
            <br />
            <br />
          </div>
        )}
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default ProductsPage;
