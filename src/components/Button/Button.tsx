import React from 'react';

import { Button as Btn } from '@material-ui/core';

type sizeType = "small" | "large" | "medium";

interface ButtonProps {
  value: string,
  size?: sizeType,
  className?: string,
  onClick: () => void | void,
}

const Button: React.FC<ButtonProps> = ({ value, onClick, className, size }) => {
  return <Btn className={className} size={size} onClick={onClick}>{value}</Btn>
}

export default Button;