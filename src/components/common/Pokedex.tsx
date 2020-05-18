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
      textAlign: "center",
      [theme.breakpoints.down(600)]: {
        width: "15%",
        bottom: "16%",
        left: "15%",
        fontSize: "1em",
      }
    },
    name: {
      position: "absolute",
      top: "155px",
      left: "367px",
      fontSize: "1.2em",
      color: "greenyellow",
      [theme.breakpoints.down(600)]: {
        top: "34%",
        left: "61%",
        fontSize: "0.6em",
      }
    },
    type: {
      position: "absolute",
      top: "187px",
      left: "367px",
      fontSize: "1.2em",
      color: "greenyellow",
      [theme.breakpoints.down(600)]: {
        top: "41%",
        left: "61%",
        fontSize: "0.6em",
      }
    },
    pokeimg: {
      position: "absolute",
      height: "115px",
      width: "115px",
      top: "142px",
      left: "109px",
      [theme.breakpoints.down(600)]: {
        height: "70px",
        width: "70px",
        top: "30%",
        left: "18%",
      }
    },
    mainImg: {
      [theme.breakpoints.down(600)]: {
        width: "100%",
      }
    }
  }),
);

const Pokedex = (props:any) => {
  const classes = useStyles();
  const {appstate} = props

  return(
    <div className={classes.pokedexContainer}>
      <img className={classes.mainImg} src={pokedexImg}/>
      { 
        appstate.pokemon_data != null &&
        <>
          <img className={classes.pokeimg}
            src={appstate.pokemon_data.sprites.front_default} 
           />
          <div className={classes.rank}>{appstate.pokemon_data.id}</div>
          <div className={classes.name}>{appstate.pokemon_data.name}</div>
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