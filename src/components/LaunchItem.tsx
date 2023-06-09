import { Button, Heading, Text, useColorModeValue, Hide, Flex, SimpleGrid } from '@chakra-ui/react';
import { dateToHumanReadable } from 'src/core/services/DateTimeUtils';
import { ILaunch } from 'src/infrastructure/apollo/types';

interface IProps {
  item: ILaunch;
  setActiveLaunch: Function;
}

const LaunchItem = ({ item, setActiveLaunch }: IProps) => {
  const borderColor = useColorModeValue('gray.100', 'purple.600');
  const bgColor = useColorModeValue('gray.50', 'transparent');
  const hoverBgColor = useColorModeValue('gray.100', 'gray.900');
  const setLaunch = (launch: ILaunch) => setActiveLaunch(launch);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 5 }}
      spacing={{ base: 0, md: 4 }}
      mb={{ base: 6, md: 0 }}
      px={{ base: 0, md: 10 }}
      py={{ base: 0, md: 4 }}
      borderRadius={{ base: 8, md: 0 }}
      border={{ base: '1px', md: 'none' }}
      borderColor={borderColor}
      backgroundColor={bgColor}
      _hover={{
        backgroundColor: hoverBgColor,
        transition: '0.3s',
      }}
    >
      <Flex
        padding={{ base: 4, md: 0 }}
        borderBottom={{ base: '1px', md: 'none' }}
        borderColor={borderColor}
        alignItems='center'
        justifyContent='space-between'
      >
        <Hide above='md'>
          <Heading as='h4' size='xs'>
            Mission Name
          </Heading>
        </Hide>
        <Text
          overflow='hidden'
          fontSize='sm'
          fontWeight={600}
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          title={item.mission_name}
        >
          {item.mission_name}
        </Text>
      </Flex>
      <Flex
        padding={{ base: 4, md: 0 }}
        borderBottom={{ base: '1px', md: 'none' }}
        borderColor={borderColor}
        alignItems='center'
        justifyContent={{ base: 'space-between', md: 'center' }}
      >
        <Hide above='md'>
          {' '}
          <Heading as='h4' size='xs'>
            Launch Site
          </Heading>
        </Hide>
        <Text fontSize='sm' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis' title={item.launch_site}>
          {item.launch_site || '—'}
        </Text>
      </Flex>
      <Flex
        padding={{ base: 4, md: 0 }}
        borderBottom={{ base: '1px', md: 'none' }}
        borderColor={borderColor}
        alignItems='center'
        justifyContent={{ base: 'space-between', md: 'center' }}
      >
        <Hide above='md'>
          <Heading as='h4' size='xs'>
            Rocket Name
          </Heading>
        </Hide>
        <Text fontSize='sm'>{item.rocket.rocket_name}</Text>
      </Flex>
      <Flex
        padding={{ base: 4, md: 0 }}
        borderBottom={{ base: '1px', md: 'none' }}
        borderColor={borderColor}
        alignItems='center'
        justifyContent={{ base: 'space-between', md: 'center' }}
      >
        <Hide above='md'>
          {' '}
          <Heading as='h4' size='xs'>
            Launch Date
          </Heading>
        </Hide>
        <Text fontSize='sm'>{dateToHumanReadable(item.launch_date_utc) || '-'}</Text>
      </Flex>
      <Flex
        padding={{ base: 4, md: 0 }}
        alignItems='center'
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        onClick={() => setLaunch(item)}
      >
        <Hide above='md'>
          {' '}
          <Heading as='h4' size='xs'>
            Details
          </Heading>
        </Hide>
        <Button
          colorScheme='purple'
          color='purple.500'
          variant='link'
          fontSize='x-small'
          textTransform='uppercase'
          fontWeight={700}
          justifyContent='flex-end'
        >
          View Details
        </Button>
      </Flex>
    </SimpleGrid>
  );
};

export { LaunchItem };
