import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//redux
import { connect } from "react-redux";
//assets
import pokedexImg from '../../assets/pokedex.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pokedexContainer: {
      position: "relative",
    },
    rank: {
      position: "absolute",
      bottom: "74px",
      left: "92px",
      fontSize: "1.5em",
      width: "89px",
      textAlign: "center"
    },
    name: {
      position: "absolute",
      top: "155px",
      left: "367px",
      fontSize: "1.2em",
      color: "greenyellow"
    },
    type: {
      position: "absolute",
      top: "187px",
      left: "367px",
      fontSize: "1.2em",
      color: "greenyellow"
    },
    pokeimg: {
      position: "absolute",
      height: "115px",
      width: "115px",
      top: "142px",
      left: "109px"
    }
  }),
);

const Pokedex = (props:any) => {
  const classes = useStyles();
  const {appstate} = props

  return(
    <div className={classes.pokedexContainer}>
      <img src={pokedexImg}/>
      { 
        appstate.pokemon_data != null &&
        <>
          <img className={classes.pokeimg}
            src={appstate.pokemon_data.sprites.front_default} 
           />
          <div className={classes.rank}>{appstate.pokemon_data.id}</div>
          <div className={classes.name}>Name:{appstate.pokemon_data.name}</div>
          <div className={classes.type}>
            {
              appstate.pokemon_data.types.map((v:any)=>v.type.name+" ")
            }
          </div>
        </>
      }
    </div>
  )
}
export default connect(
  state => ({
    appstate: state
  })
)(Pokedex);