import { ChakraProvider, Container } from '@chakra-ui/react';
import { RocketLaunches } from 'src/components/RocketLaunches';
import { Header } from 'src/components/Header';
import { Hero } from 'src/components/Hero';
import '@fontsource/inter';

export default function App() {
  return (
    <ChakraProvider>
      <Container maxW={'6xl'} pb={16}>
        <Header />
        <Hero />
        <RocketLaunches />
      </Container>
    </ChakraProvider>
  );
}
