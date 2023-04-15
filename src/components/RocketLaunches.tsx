import { useQuery } from "@apollo/client";
import { SimpleGrid, Button, Heading, Text, useColorModeValue, Show, Hide, Flex } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { GET_PAST_LAUNCHES } from "src/infrastructure/apollo/query";
import { Launch } from "src/infrastructure/apollo/types";
import { LaunchDescriptionDrawer } from "src/components/LaunchDescriptionDrawer";
import { Filters } from 'src/components/Filters'



const RocketLaunches = () => {
    const [launches, setLaunches] = useState<Launch[]>([]);
    const [limit, setLimit] = useState(10)
    const { error, loading, data } = useQuery(GET_PAST_LAUNCHES, { variables: { limit } })
    const [activeLaunch, setActiveLaunch] = useState<Launch>({} as Launch)
    const bgColor = useColorModeValue('gray.100', 'purple.900')
    const hoverBgColor = useColorModeValue('gray.50', 'gray.900')

    useEffect(() => {
        if (loading) {
            return
        }

        setLaunches(data.launchesPast);
    }, [data, limit])

    return (
        <>
            <Filters limit={limit} onChange={(limit: string) => setLimit(Number(limit))} />
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

                {!loading && launches.map((launch) => (
                    <SimpleGrid key={launch.id} columns={{ sm: 1, md: 5 }} spacing={{ base: 0, md: 4 }} marginBottom={{ base: 6, md: 0 }} paddingX={{ base: 0, md: 10 }} paddingY={{ base: 0, md: 4 }} borderRadius={{ base: 8, md: 0 }} border={{ base: '1px', md: 'none' }} borderColor={bgColor} _hover={{
                        backgroundColor: hoverBgColor,
                        transition: '0.3s'
                    }}>
                        <Flex padding={{ base: 4, md: 0 }} borderBottom={{ base: '1px', md: 'none' }} borderColor={bgColor} alignItems="center" justifyContent="space-between">
                            <Hide above='md'><Heading as="h4" size="xs">Mission Name</Heading></Hide>
                            <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" title={launch.mission_name}>{launch.mission_name}</Text>
                        </Flex>
                        <Flex padding={{ base: 4, md: 0 }} borderBottom={{ base: '1px', md: 'none' }} borderColor={bgColor} alignItems="center" justifyContent="space-between">
                            <Hide above='md'> <Heading as="h4" size="xs">Launch Site</Heading></Hide>
                            <Text>{launch.launch_site || '-'}</Text>
                        </Flex>
                        <Flex padding={{ base: 4, md: 0 }} borderBottom={{ base: '1px', md: 'none' }} borderColor={bgColor} alignItems="center" justifyContent="space-between">
                            <Hide above='md'><Heading as="h4" size="xs">Rocket Name</Heading></Hide>
                            <Text>{launch.rocket.rocket_name}</Text>
                        </Flex>
                        <Flex padding={{ base: 4, md: 0 }} borderBottom={{ base: '1px', md: 'none' }} borderColor={bgColor} alignItems="center" justifyContent="space-between">
                            <Hide above='md'>  <Heading as="h4" size="xs">Launch Status</Heading></Hide>
                            <Text>{launch.launch_success || '-'}</Text>
                        </Flex>
                        <Flex padding={{ base: 4, md: 0 }} alignItems="center" justifyContent={{ base: 'space-between', md: 'flex-end' }} onClick={() => setActiveLaunch(launch)}>
                            <Hide above='md'>  <Heading as="h4" size="xs">Details</Heading></Hide>
                            <Button colorScheme="purple" color="purple.500" variant="link" fontSize={10} textTransform='uppercase' fontWeight={700} justifyContent="flex-end">View Details</Button>
                        </Flex>
                    </SimpleGrid>
                ))}
            </div>

            {activeLaunch.id && <LaunchDescriptionDrawer launch={activeLaunch} onClose={() => setActiveLaunch({} as Launch)} />}
        </>
    )
}

export { RocketLaunches }


