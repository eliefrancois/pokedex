import { Pokemon, Result } from "../types";

export const getPokemon = async (limit: number = 10): Promise<Pokemon[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
    const data: Result = await response.json();
    return data.results.map((pokemon: Pokemon, index: number) => {
        const id = pokemon.url.split('/').slice(-2)[0];
        return {
            ...pokemon,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
    })  ;
}

export const getPokemonDetail = async (id: string): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: Pokemon = await response.json();
    return data;
}
