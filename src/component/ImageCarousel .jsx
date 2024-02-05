import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image_test from '../assets/image/occasion.jpg'
import image_other from '../assets/image/6034768.jpg'
const images = [
  {
    original: image_other ,
    thumbnail: image_other,
  },
  {
    original: image_test ,
    thumbnail: image_test,
  },
];

const ImageCarousel = () => {
  return (
    <Gallery
      items={images}
      showNav={true}
      showThumbnails={true}
      showFullscreenButton={false}
      showPlayButton={false}
      styles={{
        nextButton: { fontSize: '12px', padding: '5px' },
      }}
    />
  );
};

export default ImageCarousel;
