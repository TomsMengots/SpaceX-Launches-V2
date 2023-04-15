import { Flex, Button, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { SpaceXLogo } from 'src/components/SpaceXLogo';

enum ColorModeOptions {
  LIGHT = 'light',
}

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('black', 'white');

  return (
    <Flex alignItems='center' justifyContent='space-between' w='100%' py={4}>
      <Stack color={textColor} w='40' fill={textColor}>
        <SpaceXLogo />
      </Stack>

      <Button aria-label='Toggle Color Mode' w='fit-content' backgroundColor='transparent' onClick={toggleColorMode}>
        {colorMode === ColorModeOptions.LIGHT ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
};

export { Header };
