import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { GallerySection, Hero, ButtonGroup } from "./Home.styled";

import img1 from "src/assets/images/gallery/photo-1.jpg";
import img2 from "src/assets/images/gallery/photo-2.jpg";
import img3 from "src/assets/images/gallery/photo-3.jpg";
import img4 from "src/assets/images/gallery/photo-4.jpg";
import img5 from "src/assets/images/gallery/photo-5.jpg";
import img6 from "src/assets/images/gallery/photo-6.jpg";
import img7 from "src/assets/images/gallery/photo-7.jpg";
import img8 from "src/assets/images/gallery/photo-8.jpg";
import img9 from "src/assets/images/gallery/photo-9.jpg";
import img10 from "src/assets/images/gallery/photo-10.jpg";
import img11 from "src/assets/images/gallery/photo-11.jpg";

function Home() {
  const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Hero data-aos="fade-up">
        <p>Witamy w VitaVoice</p>
        <h1>Razem śpiewamy – razem tworzymy</h1>

        <p>Kobiecy klub wokalny pełen pasji, harmonii i wspólnoty.</p>
        <ButtonGroup>
          <Link to="/kontakt" className="btn btn-primary">
            Skontaktuj się z nami
          </Link>
          <Link to="/o-nas" className="btn btn-outline">
            Dowiedz się więcej
          </Link>
        </ButtonGroup>
      </Hero>
      <GallerySection data-aos="fade-up">
        <h2>Nasze chwile</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {slides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`Zdjęcie ${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </GallerySection>
    </>
  );
}

export default Home;
