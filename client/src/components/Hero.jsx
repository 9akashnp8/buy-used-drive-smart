import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react";

function Hero() {
    return (
        <Box 
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={5}
        >
            <Heading as="h1" size="2xl">
                Buy Used. Drive Smart.
            </Heading>
            <Text fontSize='xl'>
                Analyze the used market and explore the benefits of buying used.
            </Text>
        </Box>
    )
};

export default Hero;