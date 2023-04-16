import { Stack, Heading, Text, Box, Flex, Image, useColorMode } from '@chakra-ui/react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { ANIMATION_TYPE, ANIMATION } from 'src/core/configs/AnimationConfig';
import { ColorModeOptions } from 'src/core/configs/ColorModeConfig';

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      pb={{ base: 20, md: 24 }}
      pt={{ base: 20, md: 16 }}
      position='relative'
    >
      <Flex flexDirection='column' justifyContent='center' alignItems='center' w='100%'>
        <Flex justifyContent='center' alignItems='center' w='100%' mb='12'>
          <Stack as={motion.div} animation={ANIMATION[ANIMATION_TYPE.ROTATE]}>
            <Image src={colorMode === ColorModeOptions.LIGHT ? '/images/mars.png' : '/images/moon.png'} h={64} w={64} />
          </Stack>
        </Flex>

        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          textTransform='uppercase'
        >
          Making Humanity <br />
          <Text as={'span'} className='neon-text'>
            Multiplanetary
          </Text>
        </Heading>
      </Flex>

      <Flex justifyContent='center' alignItems='center' w='100%'>
        <Flex alignItems='center' flexDirection='column'>
          <Text fontSize='xs' fontWeight={700} textTransform='uppercase' mb={2}>
            View Launch List
          </Text>

          <Flex as={motion.div} animation={ANIMATION[ANIMATION_TYPE.BOUNCE]}>
            <AiOutlineArrowDown size={32} />
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export { Hero };
