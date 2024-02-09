import React, { useState, useEffect } from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageCarousel = ({ images_annonce }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const updatedImages = [];
    for (let i = 0; i < images_annonce.length; i++) {
      const img = {
        original: images_annonce[i],
        thumbnail: images_annonce[i]
      };
      updatedImages.push(img);
    }
    setImages(updatedImages);
  }, [images_annonce]);

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
