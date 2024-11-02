import RestaurantList from '../../components/RestaurantList'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return <Loader />
  }
  return (
    <>
      <Hero />
      <RestaurantList restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
