import { Box } from "@chakra-ui/react"

function ChartWrapper({children}) {
    return (
        <Box
            border={'1px solid #3182CE'}
            borderRadius={5}
            p={5}
            w={'85%'}
            mx={'auto'}
            my={5}
        >
            {children}
        </Box>
    ) 
}

export default ChartWrapper;