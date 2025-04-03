import { Wrapper } from "./About.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function About() {
  return (
    <Wrapper>
      <h1>O nas</h1>
      <div className="intro">
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
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
          alt="Zespół VitaVoice"
        />
      </div>

      <h2>Dlaczego warto do nas dołączyć?</h2>
      <ul>
        <li>Przyjazna atmosfera i wsparcie kobiet</li>
        <li>Regularne występy i udział w koncertach</li>
        <li>Warsztaty wokalne z profesjonalistami</li>
        <li>Muzyka, która porusza serca</li>
        <li>Wspólne wyjazdy i wydarzenia integracyjne</li>
      </ul>

      <img
        src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1000&q=80"
        alt="Zespół VitaVoice"
      />

      <h2>Opinie uczestniczek</h2>
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
