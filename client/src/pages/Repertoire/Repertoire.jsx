import { Section } from "./Repertoire.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Repertoire() {
  const repertoireItems = [
    {
      title: "Amazing Grace",
      image: "https://source.unsplash.com/800x500/?choir,grace",
      video: "https://www.youtube.com/embed/CDdvReNKKuk",
    },
    {
      title: "Hallelujah",
      image: "https://source.unsplash.com/800x500/?hallelujah,singing",
      video: "https://www.youtube.com/embed/y8AWFf7EAc4",
    },
    {
      title: "Let It Be",
      image: "https://source.unsplash.com/800x500/?music,let-it-be",
      video: "https://www.youtube.com/embed/QDYfEBY9NM4",
    },
    {
      title: "Pieśni ludowe",
      image: "https://source.unsplash.com/800x500/?folk,music",
      video: "https://www.youtube.com/embed/xbD8r0EJHBA",
    },
  ];

  return (
    <Section>
      <h2>Repertuar</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {repertoireItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-item">
              <img src={item.image} alt={item.title} />
              <iframe
                width="100%"
                height="250"
                src={item.video}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default Repertoire;
