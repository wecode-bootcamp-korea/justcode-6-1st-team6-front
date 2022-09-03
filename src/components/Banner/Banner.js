import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.scss';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>
          <img
            src="https://dummyimage.com/1200x300/FFE57/000000&text=A"
            alt="#!"
            style={{ minWidth: '100vw', height: '320px', marginBottom: '15px' }}
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="https://dummyimage.com/1200x300/D7EDFF/000000&text=B"
            alt="#!"
            style={{ minWidth: '100vw', height: '320px', marginBottom: '15px' }}
          />
        </h3>
      </div>
    </Slider>
  );
}

export default Banner;
