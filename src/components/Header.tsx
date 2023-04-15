import { Flex, Button, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { SpaceXLogo } from 'src/components/SpaceXLogo'

enum ColorModeOptions {
    LIGHT = "light",
}

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor = useColorModeValue('black', 'white')

    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            paddingY={8}
        >
            <Stack color={textColor} width="40" fill={textColor}>
                <SpaceXLogo />
            </Stack>

            <Button
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{ boxShadow: "none" }}
                w="fit-content"
                backgroundColor="transparent"
            >
                {colorMode === ColorModeOptions.LIGHT ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
        </Flex>
    );
};

export { Header };
