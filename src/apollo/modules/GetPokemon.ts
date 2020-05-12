import { gql } from 'apollo-boost';

const GetAllPokemon = gql`
{
  pokemons(first:100){
    name
  }
}
`;
const GetPokemonByName = gql`
{
  pokemon(name: "Pikachu") {
    id
    number
    name
    types
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
`

export {GetAllPokemon, GetPokemonByName}