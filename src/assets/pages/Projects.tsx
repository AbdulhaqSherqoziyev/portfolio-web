import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/projects.css";
import "../css/global.css";

// Rasmingizni import qilish
import agroqanot from "../images/agroqanot.png";

const Projects = () => {
  return (
    <div className="Agroqanot">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="slide">
          <img src={agroqanot} alt="Agro Qanot" />
          <div className="info-container">
            <h4>Agro Qanot</h4>
            <h5 className="color-2">#FrontEnd #HTML #CSS #React #JavaScript</h5>
            <a href="https://agroqanot.uz" target="_blank" rel="noopener noreferrer">
              view
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
      <div id="qualification"></div>
    </div>
  );
};

export default Projects;
