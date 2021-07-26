import { Button as ChakraButton } from '@chakra-ui/react';
import React, { ComponentProps, FC } from 'react';

const Button: FC<ComponentProps<typeof ChakraButton>> = ({
  children,
  ...args
}) => {
  return <ChakraButton {...args}>{children}</ChakraButton>;
};

export default Button;
