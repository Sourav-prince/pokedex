const SET_POKEMON_LIST = "SET_POKEMON_LIST"
const SET_POKEMON_DATA = "SET_POKEMON_DATA"

const initialState = {
  pokemon_list: [],
  pokemon_data: null,
  pokemon_list_getting: false,
  pokemon_data_getting: false,
}

export const setPokemonList = (data) => {
  return {
    type: SET_POKEMON_LIST,
    data
  }
}

export const savePokemonData = (data) => {
  return {
    type: SET_POKEMON_DATA,
    data
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
            
    default:
      return state;
  }
}