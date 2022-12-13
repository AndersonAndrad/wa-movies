import { extendTheme } from '@chakra-ui/react';

export const defaultTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#121212',
        color: 'gray.50',
      },
    },
  },
});
