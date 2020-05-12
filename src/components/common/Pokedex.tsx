import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import pokedexImg from '../../assets/pokedex.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pokedexContainer: {
      position: "relative",
    },
    rank: {
      position: "absolute",
      bottom: "74px",
      left: "110px",
      fontSize: "1.5em"
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
    }
  }),
);

const Pokedex = () => {
  const classes = useStyles();
  return(
    <div className={classes.pokedexContainer}>
      <img src={pokedexImg}/>
      <div className={classes.rank}>Rank</div>
      <div className={classes.name}>Name:</div>
      <div className={classes.type}>type</div>
    </div>
  )
}
export default Pokedex;