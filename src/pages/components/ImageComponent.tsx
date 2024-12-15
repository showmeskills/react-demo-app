import { Box } from '@mui/material';
import React from 'react';
import { ImageComponentProps } from '../../interface/ImageComponent.interface';

const ImageComponent: React.FC<ImageComponentProps> = ({
    src,
    alt,
    size
}) => {

  return (
    <Box 
      component="img" 
      src={src}
      alt={alt} 
      sx={size}
    />
  );
}

export default ImageComponent;