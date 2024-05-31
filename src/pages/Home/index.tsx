import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    system: string
    category: string

    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: soonGame } = useGetSoonQuery()
  const { data: onSaleGame } = useGetOnSaleQuery()

  if (soonGame && onSaleGame) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGame}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={soonGame}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Home
