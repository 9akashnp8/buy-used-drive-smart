import { useState } from "react"
import { Box } from "@chakra-ui/react"

import Hero from "./components/Hero"
import SearchForm from "./components/SearchForm"
import BaseTable from "./components/Table"
import PriceByYearChart from "./components/PriceByYearChart"

function App() {
  const [data, setData] = useState('');

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        gap={5}
        mx='20%'
        mt={20}
      >
        <Hero/>
        <SearchForm setData={setData}/>
      </Box>
      <PriceByYearChart
        data={data.avg_price_by_city}
      />
    </>
  )
}

export default App
