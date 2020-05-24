import axios from 'axios'
const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"

const SET_POKEMON_LIST = "SET_POKEMON_LIST"
const SET_POKEMON_LIST_LOADING = "SET_POKEMON_LIST_LOADING"
const SET_POKEMON_DATA = "SET_POKEMON_DATA"
const SET_POKEMON_DATA_LOADING = "SET_POKEMON_DATA_LOADING"
const SIDEBAR_OPEN = "SIDEBAR_OPEN"
const initialState = {
  pokemon_list: null,
  pokemon_data: null,
  pokemon_list_getting: false,
  pokemon_data_getting: false,
  sidebar_open: false
}

export const setPokemonList = (data) => {
  return {
    type: SET_POKEMON_LIST,
    data
  }
}

export const setPokemonListLoading = (data) => {
  return {
    type: SET_POKEMON_LIST_LOADING,
    data
  }
}

export const savePokemonData = (data) => {
  return {
    type: SET_POKEMON_DATA,
    data
  }
}

export const setPokemonDataLoading = (data) => {
  return {
    type: SET_POKEMON_DATA_LOADING,
    data
  }
}
//sidebar
export const setSidebar = (data) => {
  return {
    type: SIDEBAR_OPEN,
    data
  }
}

//async calls
export const fetchPokemonList = () => {
  return (dispatch)=>{
    dispatch(setPokemonListLoading(true))
    axios.get(pokemonListUrl).then(res=>{
      const data = res.data
      dispatch(setPokemonList(data))
      dispatch(setPokemonListLoading(false))
    })
    .catch(error=>{
      dispatch(setPokemonListLoading(false))
    })
  }
}

export const fetchPokemon = (url) => {
  return (dispatch)=>{
    dispatch(setPokemonDataLoading(true))
    axios.get(url).then(res=>{
      const data = res.data
      dispatch(savePokemonData(data))
      dispatch(setPokemonDataLoading(false))
    })
    .catch(error=>{
      dispatch(setPokemonDataLoading(false))
    })
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemon_list: action.data
      }
    case SET_POKEMON_DATA:
      return {
        ...state,
        pokemon_data: action.data
      }
    case SET_POKEMON_LIST_LOADING:
      return {
        ...state,
        pokemon_list_getting: action.data
      }
    case SET_POKEMON_DATA_LOADING:
      return {
        ...state,
        pokemon_data_getting: action.data
      }
    case SIDEBAR_OPEN:
      return {
        ...state,
        sidebar_open: action.data
      }
    default:
      return state;
  }
}