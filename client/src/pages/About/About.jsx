import { useEffect } from "react";
import { Wrapper } from "./About.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

import imgMain from "src/assets/images/about/about.jpg";
import imgBottom from "src/assets/images/about/about-choir.jpg";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const reasons = [
    "Przyjazna atmosfera i wsparcie kobiet",
    "Regularne występy i udział w koncertach",
    "Warsztaty wokalne z profesjonalistami",
    "Muzyka, która porusza serca",
    "Wspólne wyjazdy i wydarzenia integracyjne",
  ];

  return (
    <Wrapper>
      <h1 data-aos="fade-up">O nas</h1>
      <div className="intro" data-aos="fade-up">
        <div className="intro-text">
          <p>
            VitaVoice to kobiecy klub wokalny skupiający kobiety z pasją do
            śpiewu, muzyki i wspólnego tworzenia. Naszym celem jest nie tylko
            rozwój muzyczny, ale również budowanie silnej wspólnoty, w której
            każda uczestniczka może znaleźć swoje miejsce.
          </p>
          <p>
            Regularnie spotykamy się na próbach, koncertujemy i bierzemy udział
            w wydarzeniach kulturalnych. W repertuarze mamy zarówno muzykę
            klasyczną, jak i współczesną oraz pieśni ludowe.
          </p>
          <p>
            Zapraszamy do dołączenia do naszej muzycznej rodziny – niezależnie
            od poziomu doświadczenia. Liczy się pasja, otwartość i chęć
            wspólnego śpiewania!
          </p>
        </div>
        <img data-aos="fade-left" src={imgMain} alt="Zespół VitaVoice" />
      </div>

      <h2 data-aos="fade-up">Dlaczego warto do nas dołączyć?</h2>
      <ul>
        {reasons.map((text, index) => (
          <li key={index} data-aos="fade-left" data-aos-delay={index * 100}>
            {text}
          </li>
        ))}
      </ul>

      <img
        data-aos="zoom-in"
        src={imgBottom}
        alt="Zespół VitaVoice performing"
      />

      <h2 data-aos="fade-up">Opinie uczestniczek</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="quote">
            „VitaVoice to miejsce, gdzie znalazłam przyjaźnie na całe życie i
            spełniam swoją pasję!” – Ania
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="quote">
            „Niesamowita energia i cudowne kobiety. Śpiewając razem, tworzymy
            coś wyjątkowego.” – Marta
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="quote">
            „Każda próba to dawka pozytywnej energii. To moja odskocznia od
            codzienności.” – Kasia
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default About;
