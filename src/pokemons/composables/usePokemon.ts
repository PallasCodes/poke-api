import { useQuery } from "@tanstack/vue-query";
import type { Pokemon } from "../interfaces";

export const usePokemon = async (id: string) => {
  const { isLoading, data: pokemon, isError, error } = useQuery(['pokemon', id])


}