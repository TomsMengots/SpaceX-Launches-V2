import { Filters } from 'src/components/Filters';
import { GET_PAST_LAUNCHES } from 'src/infrastructure/apollo/query';
import { Launch } from 'src/infrastructure/apollo/types';
import { LaunchDescriptionDrawer } from 'src/components/LaunchDescriptionDrawer';
import { LaunchItem } from 'src/components/LaunchItem';
import { SimpleGrid, Button, Heading, useColorModeValue, Show, Flex, Spinner } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { PaginationOption } from 'src/core/models/PaginationModel';

enum TableHeading {
  MISSION_NAME = 'Mission Name',
  LAUNCH_SITE = 'Launch Site',
  ROCKET_NAME = 'Rocket Name',
  LAUNCH_STATUS = 'Launch Status',
  EMPTY = '',
}

const RocketLaunches = () => {
  const [limit, setLimit] = useState(PaginationOption.TEN);
  const [activeLaunch, setActiveLaunch] = useState<Launch>({} as Launch);
  const bgColor = useColorModeValue('gray.100', 'purple.900');
  const buttonColor = useColorModeValue('gray.50', 'transparent');
  const buttonHoverColor = useColorModeValue('gray.100', 'gray.900');

  const { error, loading, fetchMore, refetch, data } = useQuery(GET_PAST_LAUNCHES, {
    variables: { limit },
  });

  if (loading) {
    return (
      <Flex alignItems='center' justifyContent='center' w='100%' h={48}>
        <Spinner size='xl' />
      </Flex>
    );
  }

  return (
    <>
      <Filters
        limit={limit}
        onChange={(paginationLimit: PaginationOption) => {
          const limit = Number(paginationLimit);

          setLimit(limit);
          refetch({ limit });
        }}
      />

      <div>
        <Show above='md'>
          <SimpleGrid columns={{ md: 5 }} spacing={4} backgroundColor={bgColor} borderTopRadius={8} px={10} py={4}>
            {[
              TableHeading.MISSION_NAME,
              TableHeading.LAUNCH_SITE,
              TableHeading.ROCKET_NAME,
              TableHeading.LAUNCH_STATUS,
              TableHeading.EMPTY,
            ].map((heading, index) => (
              <Heading key={index} as='h4' size='xs'>
                {heading}
              </Heading>
            ))}
          </SimpleGrid>
        </Show>

        {data.launchesPast.map((launch: Launch) => (
          <LaunchItem key={launch.id} item={launch} setActiveLaunch={setActiveLaunch} />
        ))}

        <Flex w='full' alignItems='center' justifyContent='center'>
          <Button
            colorScheme='gray'
            color='purple.500'
            bgColor={buttonColor}
            borderTopRadius='0'
            fontSize='sm'
            size='lg'
            w='100%'
            _hover={{
              bgColor: buttonHoverColor,
            }}
            onClick={() =>
              fetchMore({
                variables: {
                  limit: limit + data.launchesPast.length,
                  offset: data.launchesPast.length,
                },
              })
            }
          >
            Load More Rocket Launches
          </Button>
        </Flex>
      </div>

      {activeLaunch.id && (
        <LaunchDescriptionDrawer launch={activeLaunch} onClose={() => setActiveLaunch({} as Launch)} />
      )}
    </>
  );
};

export { RocketLaunches };
