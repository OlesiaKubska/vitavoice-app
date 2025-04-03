import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { GallerySection, Hero, ButtonGroup } from "./Home.styled";

function Home() {
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
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="Zdjęcie 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1598387850434-9b4a9e0d6c5c?auto=format&fit=crop&w=800&q=80"
              alt="Zdjęcie 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80"
              alt="Zdjęcie 3"
            />
          </SwiperSlide>
        </Swiper>
      </GallerySection>
    </>
  );
}

export default Home;
