import { Box } from "@chakra-ui/react"

import Hero from "./components/Hero"
import SearchForm from "./components/SearchForm"

function App() {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      gap={5}
      mx='20%'
      mt={20}
    >
      <Hero/>
      <SearchForm/>
    </Box>
  )
}

export default App
