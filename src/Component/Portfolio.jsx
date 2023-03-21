import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const Data = [
    {
      id: 1,
      nama: "Warunk Ibu Titin",
      gambar: "./assets/Warunk-Mamah.png",
      alamat: "https://warunk-mamah.vercel.app/",
      deskripsi:
        "This is digitization of Warunk Mamah project using React Js. To improve web performance, I use lazy loading method and redux toolkit.",
    },
    {
      id: 2,
      nama: "Warunk Coffee",
      gambar: "./assets/Warunk-Coffee.png",
      alamat: "https://warcoff.vercel.app/",
      deskripsi:
        "This is my experimental project to digitize online shop using react js and redux toolkit. The database technology used is in the form of Google Sheets.",
    },
    {
      id: 3,
      nama: "Binar Car Rental (Admin)",
      gambar: "./assets/BCR-ADMIN.png",
      alamat: "https://bcr-admin-nu.vercel.app/",
      deskripsi:
        "This is my practice project to protect pages with token technology and CRUD actions. The Rest API supported by Binar Academy.",
    },
    {
      id: 4,
      nama: "Game Alien Ditembakin",
      gambar: "./assets/Alien.png",
      alamat: "https://alien-ditembakin.vercel.app/",
      deskripsi:
        "This project is the first game project to use multiple react hooks. On the front page, your eyes will be spoiled with a parallax effect.",
    },
    {
      id: 5,
      nama: "Binar Car Rental",
      gambar: "./assets/BCR-1.png",
      alamat: "https://github.com/tomyad08/Binar-Car-Rental-v01",
      deskripsi:
        "This is my first practice project to create a car rental website using react js. The data displayed uses the API database provided by Binar Academy.",
    },
  ];
  return (
    <div className="container-fluid" id="project" data-aos="fade-up">
      <h1
        className="text-center"
        style={{
          fontSize: "60px",
        }}
      >
        <strong>Latest Project</strong>
      </h1>
      <p className="text-center">Please click a card to look the website.</p>
      <OwlCarousel
        className="owl-theme"
        center={true}
        loop={true}
        margin={10}
        nav={true}
        dots={false}
        autoplay={true}
        autoplayTimeout={4000}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }}
      >
        {Data.map((value) => (
          <div className="item mx-1">
            <a
              href={value.alamat}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className="border border-3 rounded-5"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  fontfamily: "'Roboto', sans-serif",
                }}
                key={value.id}
              >
                <img src={value.gambar} alt=" " width="100%" />
                <h5 className="text-center pt-2">{value.nama}</h5>
                <p className="px-2" style={{ textAlign: "justify" }}>
                  {value.deskripsi}
                </p>
              </div>
            </a>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};
export default Portfolio;
