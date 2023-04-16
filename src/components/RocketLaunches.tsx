import { Filters } from 'src/components/Filters';
import { GET_PAST_LAUNCHES } from 'src/infrastructure/apollo/query';
import { Launch } from 'src/infrastructure/apollo/types';
import { LaunchDescriptionDrawer } from 'src/components/LaunchDescriptionDrawer';
import { LaunchItem } from 'src/components/LaunchItem';
import { SimpleGrid, Button, Heading, useColorModeValue, Show, Flex, Spinner } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { PaginationOption } from 'src/core/models/PaginationModel';
import { TABLE_HEADINGS } from 'src/core/configs/RocketLaunchTableConfig';

const RocketLaunches = () => {
  const [limit, setLimit] = useState(PaginationOption.TEN);
  const [activeLaunch, setActiveLaunch] = useState<Launch>({} as Launch);
  const bgColor = useColorModeValue('gray.100', 'purple.600');
  const buttonColor = useColorModeValue('gray.50', 'transparent');
  const buttonHoverColor = useColorModeValue('gray.100', 'gray.900');

  const { loading, fetchMore, refetch, data } = useQuery(GET_PAST_LAUNCHES, {
    notifyOnNetworkStatusChange: true,
    variables: { limit },
  });

  if (loading && !data) {
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
            {TABLE_HEADINGS.map(({ title, position }, index: number) => (
              <Heading key={`${index}-${title}`} as='h4' fontSize='xs' textAlign={position}>
                {title}
              </Heading>
            ))}
          </SimpleGrid>
        </Show>

        {data.launchesPast.map((launch: Launch, index: number) => (
          <LaunchItem key={`${launch.id}-${index}`} item={launch} setActiveLaunch={setActiveLaunch} />
        ))}

        <Flex w='full' alignItems='center' justifyContent='center'>
          <Button
            colorScheme='gray'
            color='purple.500'
            bgColor={buttonColor}
            borderTopRadius={{ base: 4, md: 0 }}
            fontSize='sm'
            size='lg'
            isLoading={loading}
            disabled={!data.launchesPast.length}
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
