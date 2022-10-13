import React, { useEffect, useState } from "react";
import CardComponents from "../../Components/CardComponents/CardComponents";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

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
              <h2>Other Daily Job Opportunities</h2>
              <a href="https://drive.google.com/file/d/1na-w3KdNftQfmB-rg1v7bWUQKMnmS7n8/view?usp=sharing">
                <button className="addBtn btn btn-primary">03-10-2022</button>
              </a>

              <br />

              <a href="https://drive.google.com/file/d/19W8FsXaCI-rJNoDe5WA9kg8i_ZtQVKNo/view?usp=sharing">
                <button className="addBtn btn btn-primary">04-10-2022</button>
              </a>

             < br />

              <a href="https://drive.google.com/file/d/1HTWdo5Aqr97AmBnhf10MoScCxobKzXea/view?usp=sharing">
                <button className="addBtn btn btn-primary">06-10-2022</button>
              </a>
               <br />

               <a href="https://drive.google.com/file/d/1VreZdBtQByJqm679jrTRSUWYjQ0-wiOS/view?usp=sharing">
                <button className="addBtn btn btn-primary">07-10-2022</button>
              </a>

              <br />

              
              <a href="https://drive.google.com/file/d/1jRK5QNmEDbh9HwXHAq642QPv7TRXZ1Z0/view?usp=sharing">
                <button className="addBtn btn btn-primary">08-10-2022</button>
              </a>
              <br />

              <a href="https://drive.google.com/file/d/19W8FsXaCI-rJNoDe5WA9kg8i_ZtQVKNo/view?usp=sharing">
                <button className="addBtn btn btn-primary">04-10-2022</button>
              </a>
            </div>
            <div className="skills-wrapper">
              <h2>Test Your Skills And Win More Jobs !! </h2>
              <a href="/skill_test">
                {" "}
                <button className="addBtn btn btn-primary">
                  Take Your Typing Speed Test
                </button>{" "}
              </a>
            </div>
          </div>
        ) : (
          <div className="skills-mobile">
            <div className="externalJobs">
              <h2>Other Daily Job Opportunities</h2>

              <br />

           
              <a href="https://drive.google.com/file/d/1na-w3KdNftQfmB-rg1v7bWUQKMnmS7n8/view?usp=sharing">
                <button className="addBtn btn btn-primary">03-10-2022</button>
              </a>

              <br />

              <a href="https://drive.google.com/file/d/19W8FsXaCI-rJNoDe5WA9kg8i_ZtQVKNo/view?usp=sharing">
                <button className="addBtn btn btn-primary">04-10-2022</button>
              </a>

             < br />

              <a href="https://drive.google.com/file/d/1HTWdo5Aqr97AmBnhf10MoScCxobKzXea/view?usp=sharing">
                <button className="addBtn btn btn-primary">06-10-2022</button>
              </a>
               <br />

               <a href="https://drive.google.com/file/d/1VreZdBtQByJqm679jrTRSUWYjQ0-wiOS/view?usp=sharing">
                <button className="addBtn btn btn-primary">07-10-2022</button>
              </a>

              <br />

              
              <a href="https://drive.google.com/file/d/1jRK5QNmEDbh9HwXHAq642QPv7TRXZ1Z0/view?usp=sharing">
                <button className="addBtn btn btn-primary">08-10-2022</button>
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
      <Footer />
    </React.Fragment>
  );
}

export default ProductsPage;
