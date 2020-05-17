/* eslint-disable no-use-before-define */
import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {setPokemonList,savePokemonData, fetchPokemonList, fetchPokemon} from "../../reducers/reducer";
const Searcher = (props:any) => {
  
  const {appstate} = props
  const [value, setValue] = React.useState<any | null>(null);
  //fetch pokemon list
  useEffect(()=>{
    props.fetchPokemonList();
  },[])

  //autocompletefield
  useEffect(()=>{
    if(value!=null){
      props.fetchPokemon(value.url)
    }
  },[value])

  return (
    <>
    {
      appstate.pokemon_list!=null &&
      <Autocomplete
      id="combo-box-demo"
      value={value}
      onChange={(event: any, newValue: any | null) => {
        setValue(newValue);
      }}
      options={[...appstate.pokemon_list.results]}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Enter Pokemon Name" variant="outlined" />}
    />
    }
    </>
  );
}

export default connect(
  state => ({
    appstate: state
  }),
  dispatch => ({
    savePokemonData: bindActionCreators(savePokemonData, dispatch),
    fetchPokemonList: bindActionCreators(fetchPokemonList, dispatch),
    fetchPokemon: bindActionCreators(fetchPokemon, dispatch)
  })
)(Searcher);
