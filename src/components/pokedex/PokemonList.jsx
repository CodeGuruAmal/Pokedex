import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
  return (
    <div className='flex w-full min-[592px]:w-[90vw] min-[592px]:absolute right-0 top-16 mx-auto  flex-wrap gap-6 max-[592px]:gap-5 pt-20 justify-center overflow-hidden'><PokemonCard/></div>
  )
}

export default PokemonList