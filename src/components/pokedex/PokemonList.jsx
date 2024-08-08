import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
  return (
    <div className='flex w-full min-[550px]:w-[90vw] min-[550px]:absolute right-0 top-10 mx-auto  flex-wrap gap-5 max-[550px]:gap-1 pt-20 justify-center overflow-hidden'><PokemonCard/></div>
  )
}

export default PokemonList