import { Flex, Button, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { SpaceXLogo } from 'src/components/SpaceXLogo';
import { ColorModeOptions } from 'src/core/configs/ColorModeConfig';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('black', 'white');
  const colorForToggle = useColorModeValue('white', 'neutral.900');

  return (
    <Flex alignItems='center' justifyContent='space-between' w='100%' py={4}>
      <Stack color={textColor} w='40' fill={textColor}>
        <SpaceXLogo />
      </Stack>

      <Button
        aria-label='Toggle Color Mode'
        w='fit-content'
        backgroundColor={colorForToggle}
        p={0}
        onClick={toggleColorMode}
      >
        {colorMode === ColorModeOptions.LIGHT ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
};

export { Header };
