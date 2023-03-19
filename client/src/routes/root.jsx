import { useState } from "react"
import { Box } from "@chakra-ui/react"

import Hero from "../components/Hero"
import SearchForm from "../components/SearchForm"
import PriceByLocationChart from "../components/PriceByLocationChart"
import PriceByYearChart from "../components/PriceByYearChart"
import Top5LocationsChart from "../components/Top5LocationsChart"
import Navbar from "../components/Navbar"

function Root() {
  const [data, setData] = useState('');

  return (
    <>
      <Navbar/>
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
      <PriceByLocationChart
        data={data.avg_price_by_city}
      />
      <PriceByYearChart
        data={data.avg_price_by_year}
      />
      <Top5LocationsChart
        data={data.top_5_cities_with_ads}
      />
    </>
  )
}

export default Root
