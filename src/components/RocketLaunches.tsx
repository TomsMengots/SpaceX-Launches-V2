import { useQuery } from "@apollo/client";
import { SimpleGrid, Button, Heading, Text, useColorModeValue, Show, Flex, Spinner } from '@chakra-ui/react'
import { useState, useRef } from "react";
import { GET_PAST_LAUNCHES } from "src/infrastructure/apollo/query";
import { Launch } from "src/infrastructure/apollo/types";
import { LaunchDescriptionDrawer } from "src/components/LaunchDescriptionDrawer";
import { Filters } from 'src/components/Filters'
import { LaunchItem } from "src/components/LaunchItem";



const RocketLaunches = () => {
    const launchTable = useRef();
    const [limit, setLimit] = useState(10)
    const [activeLaunch, setActiveLaunch] = useState<Launch>({} as Launch)
    const bgColor = useColorModeValue('gray.100', 'purple.900')

    const { error, loading, fetchMore, refetch, data } = useQuery(GET_PAST_LAUNCHES, { variables: { limit } })


    if (loading) {
        return (
            <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
                <Spinner size='xl' />
            </Flex>
        )
    }

    return (
        <>
            <Filters limit={limit} onChange={(limit: string) => {
                setLimit(Number(limit))
                refetch({
                    limit: Number(limit),
                })
            }} />

            <div>
                <Show above='md'>
                    <SimpleGrid columns={{ md: 5 }} spacing={4} backgroundColor={bgColor} borderTopRadius={8} paddingX={10} paddingY={4}>
                        <Heading as="h4" size="xs">Mission Name</Heading>
                        <Heading as="h4" size="xs">Launch Site</Heading>
                        <Heading as="h4" size="xs">Rocket Name</Heading>
                        <Heading as="h4" size="xs">Launch Status</Heading>
                        <Heading as="h4" size="xs">&nbsp;</Heading>
                    </SimpleGrid>
                </Show>

                {data.launchesPast.map((launch: Launch) => (
                    <LaunchItem key={launch.id} item={launch} setActiveLaunch={setActiveLaunch} />

                ))}

                <Flex w="full" alignItems="center" justifyContent="center" mt="8">
                    <Button variant="outline" colorScheme="purple" w="100%" mx="10" onClick={() => fetchMore({
                        variables: {
                            limit: limit + data.launchesPast.length,
                            offset: data.launchesPast.length
                        }
                    })}>
                        Load More
                    </Button>
                </Flex>
            </div>

            {activeLaunch.id && <LaunchDescriptionDrawer launch={activeLaunch} onClose={() => setActiveLaunch({} as Launch)} />}
        </>
    )
}

export { RocketLaunches }


