import { useQuery } from "@apollo/client";
import "./styles.css";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { GET_PAST_LAUNCHES } from "./infrastructure/apollo/query";

export default function App() {
  const [launches, setLaunches] = useState([]);
  const { error, loading, data } = useQuery(GET_PAST_LAUNCHES)

  useEffect(() => {
    if (loading) {
      return
    }

    setLaunches(data.launchesPast);
  }, [data])

  return (
    <ChakraProvider>
      <div className="App">
        <h1>SpaceX Launches</h1>
        <Flex width="100vw" justifyContent="center" alignItems="center" flexDirection={'column'}>
          {!loading && launches.map((launch) => (
            <div key={(launch as any).mission_name}>{(launch as any).mission_name}</div>
          ))}
        </Flex>

      </div>
    </ChakraProvider>);
}
