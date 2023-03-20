import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Working = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container" id="working" data-aos="fade-up">
      <h1
        className="text-center my-5"
        style={{
          fontSize: "60px",
        }}
      >
        <strong>Working Experiences</strong>
      </h1>
      <div className="row">
        {/* col1 */}
        <div className="col-md">
          <div
            className="p-3"
            style={{
              height: "210px",
              backgroundColor: "purple",
              marginBottom: "10px",
              borderRadius: "20px 0 0 0",
              color: "white",
            }}
          >
            <h6 style={{ color: "yellow" }}>Mar 2022 - Jan 2023</h6>
            <h5>
              Physics & Math Content Creator (Freelance) at Bimbingan Belajar
              Akselen
            </h5>
            <p>• Making video concept for senior & Junior high school level</p>
          </div>
          <div
            className="p-3"
            style={{
              height: "150px",
              backgroundColor: "purple",
              marginBottom: "10px",
              borderRadius: "0 0 0 20px",
              color: "white",
            }}
          >
            <h6 style={{ color: "yellow" }}>Feb 2021 - Des 2021</h6>
            <h5>Rockstar Teacher at Pahamify</h5>
            <p>• Making video physics concept and try out for SBMPTN Level</p>
          </div>
        </div>
        {/* col2 */}
        <div className="col-md">
          <div
            className="p-3"
            style={{
              height: "110px",
              backgroundColor: "purple",
              marginBottom: "10px",
              color: "white",
            }}
          >
            <h6 style={{ color: "yellow" }}> Sep 2020 - Feb 2021</h6>
            <h5>Lecturer Physics Asistant at Universitas Indonesia</h5>
          </div>
          <div
            className="p-3"
            style={{
              height: "100px",
              backgroundColor: "purple",
              marginBottom: "10px",
              color: "white",
            }}
          >
            <h6 style={{ color: "yellow" }}>Feb 2018 - Feb 2019</h6>
            <h5>Chairman of Makara Cirebon UI Community</h5>
          </div>
          <div
            className="p-3"
            style={{
              height: "140px",
              backgroundColor: "purple",
              marginBottom: "10px",
              color: "white",
            }}
          >
            <h6 style={{ color: "yellow" }}>Feb 2018 - Feb 2019</h6>
            <h5>Deputy of Saintek at Physics Departmen</h5>
            <p>• We created MAPRES school program </p>
          </div>
        </div>
        {/* col3 */}
        <div className="col-md">
          <div
            className="p-3"
            style={{
              height: "370px",
              backgroundColor: "purple",
              borderRadius: "0 20px 20px 0",
              color: "white",
            }}
          >
            <h6 style={{ color: "yellow" }}>Okt 2017 - Jan 2018</h6>
            <h5>
              Project Officer UI Goes to Cirebon, Makara Cirebon UI Community
            </h5>
            <p>• Try out SBMPTN 2019 for 31 senior high school in Cirebon </p>
            <p>• Succeeded in visiting 31 high schools in Cirebon </p>
            <p>
              • Collaborating with Gramedia and Bimbel Nurul Fikri companies
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Working;
