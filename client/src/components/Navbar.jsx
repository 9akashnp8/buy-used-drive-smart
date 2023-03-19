import { 
    Box,
    Heading,
    Text,
    HStack,
    Link
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderBottom={'1px solid #A0AEC0'}
            px='10%'
            py={5}
        >
            <HStack spacing={16}>
                <Heading size='xl'>BUDS</Heading>
                <Text fontSize='lg'>
                    <Link as={RouterLink} to="/about/">
                        About
                    </Link>
                </Text>
            </HStack>
            <Text fontSize='2xl'>
                <Link href="https://github.com/9akashnp8/buy-used-drive-smart" isExternal>
                    <FaGithub />
                </Link>
            </Text>
        </Box>
    )
}

export default Navbar;