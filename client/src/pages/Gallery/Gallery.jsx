import { useState } from "react";
import { Wrapper } from "./Gallery.styled";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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

function Gallery() {
  const images = [
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
  const [index, setIndex] = useState(-1);

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1,
  };

  return (
    <Wrapper>
      <h2>Galeria</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, idx) => (
          <img
            key={`gallery-img-${idx}`}
            src={src}
            alt={`Zdjęcie ${idx + 1}`}
            loading="lazy"
            onClick={() => setIndex(idx)}
          />
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </Wrapper>
  );
}

export default Gallery;
