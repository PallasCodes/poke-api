import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonResponse } from '../interfaces'

export const getPokemon = async (id: number): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${id}`)

  const pokemon = { id: data.id, name: data.name, frontSprite: data.sprites.front_default }

  return pokemon
}
