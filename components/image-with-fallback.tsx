'use client';

import Image, { type ImageProps } from 'next/image';
import React, { useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  //const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //   setCurrentSrc(src);
  //   //setHasError(false);
  // }, [src]);

  const handleError = () => {
    //if (!hasError && currentSrc !== fallbackSrc) {
    console.warn(`Error loading image: ${src}. Falling back to ${fallbackSrc}`);
    setCurrentSrc(fallbackSrc);
    //setHasError(true);
    // }
  };

  return (
    <Image
      key={currentSrc.toString()}
      priority={props.priority}
      src={currentSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;
