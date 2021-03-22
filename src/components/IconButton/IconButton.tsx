import React from 'react';

import { IconButton as IconBtn } from '@material-ui/core';
import { Icon } from '@material-ui/core';

type sizeType = "inherit" | "default" | "small" | "large";

interface IconButtonProps {
  icon: React.ElementType,
  className: string,
  fontSize?: sizeType,
  onClick: () => void,
}

const IconButton: React.FC<IconButtonProps> = ({ icon, className, fontSize, onClick }) => {
  return (
    <IconBtn disableRipple={true} onClick={onClick}>
      <Icon fontSize={fontSize} className={className} component={icon} />
    </IconBtn>
  ) 
}

export default IconButton;