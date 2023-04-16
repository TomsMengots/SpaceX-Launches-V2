import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  global: () => ({
    body: {
      bg: mode('gray.100', 'red'),
    },
  }),
});

export { theme };
