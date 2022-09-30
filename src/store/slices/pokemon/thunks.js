import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const  getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) =>{
        dispatch( startLoadingPokemons() );

        //TODO: Realizar petición Https

        // USANDO EL FETCH PARA OBTENER LOS DATOS DEL API DE POKEMON!
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data);
        
        // Utilizando AXIOS En vez de FETCH
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch ( setPokemons ({ pokemons: data.results, page: page + 1 }) );
        // dispatch( setPokemons );
    }

}