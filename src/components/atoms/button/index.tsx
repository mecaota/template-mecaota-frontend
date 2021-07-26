import { Button as ChakraButton } from '@chakra-ui/react';
import React, { ComponentProps, FC } from 'react';

export const Button: FC<ComponentProps<typeof ChakraButton>> = ({
  children,
  ...args
}) => {
  return <ChakraButton {...args}>{children}</ChakraButton>;
};
