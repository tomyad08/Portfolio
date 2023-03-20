import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="row container-fluid" id="banner">
      <div className="container col-md ms-1" id="tulisan" data-aos="fade-up">
        <h1 style={{ fontSize: "60px" }}>
          <strong>About Me</strong>
        </h1>
        <p style={{ textAlign: "justify" }}>
          My name is Tomy Adiansyah, I am interested in learning science and
          frontend websites development. I have created several website
          portfolios involving redux-toolkit tech, lazy loading, RESTfull API,
          Filter, Web Responsive, CRUD (Create, Read, Update, and Delete) Action
          using React JS.
        </p>
        <p>
          <strong>Computational Skill:</strong> React JS, Next JS, Redux, HTML,
          CSS, Bootstrap, and Microsoft Office
        </p>
        <a href="#project" style={{ textDecoration: "none", color: "black" }}>
          <button
            className="btn px-5 py-2 border border-0 rounded-2 mb-3"
            style={{
              backgroundColor: "purple",
              fontSize: "20px",
              color: "white",
            }}
          >
            Explore
          </button>
        </a>
      </div>
      <div className="col-md" id="gambar">
        <img
          src="./assets/tomy.png"
          alt=" "
          width="100%"
          style={{ marginTop: "70px" }}
        />
      </div>
    </div>
  );
};
export default Banner;
