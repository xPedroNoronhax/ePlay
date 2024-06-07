import Banner from '../../components/Banner'

import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: soonGame, isLoading: isLoadingSale } = useGetSoonQuery()
  const { data: onSaleGame, isLoading: isLoadingSoon } = useGetOnSaleQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGame}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGame}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
