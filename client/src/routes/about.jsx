import { 
    Box,
    Heading,
    HStack
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { GiBarrier } from "react-icons/gi";

function About() {
    return (
        <>
        <Navbar/>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          gap={5}
          mx='20%'
          my={20}
        >
            <Heading>
                <Box display={'flex'} gap={5} alignItems={'center'}>
                    <GiBarrier/> Work In Progress
                </Box>
            </Heading>
        </Box>
      </>
    )
}

export default About;