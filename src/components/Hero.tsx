import { Stack, Heading, Text, Box, Flex, Image, keyframes } from "@chakra-ui/react"
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from 'framer-motion';



const Hero = () => {
    const animationKeyframes = keyframes`
    0% { transform: translateY(0%) }
    50% { transform: translateY(25%) }
    100% {  transform: translateY(0%) }
  `;

    const animation = `${animationKeyframes} 3s ease-in-out infinite`;

    return (
        <Stack as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
            pt={{ base: 20, md: 16 }}
            minHeight="85vh"
            position="relative"
        >
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
                textTransform="uppercase"
            >
                Making Humanity <br />
                <Text as={'span'} color={'purple.400'}>
                    Multiplanetary
                </Text>

                <Flex justifyContent="center" alignItems="center" width="100%" marginTop="12">
                    <Image src="/images/moon.png" height="64" width="64" />
                </Flex>
            </Heading>

            <Flex position="absolute" bottom={12} left={0} justifyContent="center" alignItems="center" width="100%">
                <Flex fontSize={12} fontWeight={600} textTransform="uppercase" alignItems="center" flexDirection="column" >
                    <Text marginBottom={2}>View Launch List</Text>

                    <Flex as={motion.div} animation={animation}>
                        <AiOutlineArrowDown
                            size={32} />
                    </Flex>
                </Flex>
            </Flex>
        </Stack>
    )
}

export { Hero }