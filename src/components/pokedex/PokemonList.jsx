import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
  return (
    <div className='flex relative z-5 w-full min-[592px]:w-[90vw] min-[592px]:absolute right-0 top-20 mx-auto min-[592px]:pt-20 p-10 flex-wrap gap-6 max-[592px]:gap-5 justify-center overflow-hidden'><PokemonCard/></div>
  )
}

export default PokemonList