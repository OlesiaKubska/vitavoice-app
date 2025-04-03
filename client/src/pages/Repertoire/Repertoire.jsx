import { Section } from "./Repertoire.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Repertoire() {
  const repertoireItems = [
    {
      title: "Amazing Grace",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      video: "https://www.youtube.com/embed/CDdvReNKKuk",
    },
    {
      title: "Hallelujah",
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
      video: "https://www.youtube.com/embed/y8AWFf7EAc4",
    },
    {
      title: "Let It Be",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
      video: "https://www.youtube.com/embed/QDYfEBY9NM4",
    },
    {
      title: "Pieśni ludowe",
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
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
              <div>{item.title}</div>
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
