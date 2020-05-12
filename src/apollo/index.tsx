import React from 'react';
import {GetAllPokemon, GetPokemonByName} from './modules/GetPokemon' 
import { useQuery, useLazyQuery} from '@apollo/react-hooks';

const ApolloHandler = () => {
  const { loading, error, data } = useQuery(GetAllPokemon);
  const [getPokemon, { loading:loadingPokemon, data:dataPokemon }] = useLazyQuery(GetPokemonByName);
  if(data){
    console.log('get all',data);
  }
  if(dataPokemon){
    console.log('pikachu',dataPokemon);
  }
  setTimeout(()=>{
    getPokemon();
  },5000)
  
  return(
    <></>
  )
}
export default ApolloHandler