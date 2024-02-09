import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const images = []

const ImageCarousel = ({images_annonce}) => {
  for(let i = 0; i < images_annonce.length; i++) {
    const img = {
      original: images_annonce[i] ,
      thumbnail : images_annonce[i]
    }
    images.concat(img)
  }
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
