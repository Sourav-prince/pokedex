import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Pokedex from '../common/Pokedex';
import Searcher from '../common/Searcher';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      padding: theme.spacing(5),
      [theme.breakpoints.down(600)]: {
        padding: theme.spacing(1)
      }
    }
  }),
);

const MainContainer = () => {
  const classes = useStyles();
  return(
    <Container className={classes.container} maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item sm={12} md={8}>
          <Pokedex/>
        </Grid>
        <Grid item sm={12} md={4}>
          <Searcher/>
        </Grid>
      </Grid>
    </Container>
  )
}
export default MainContainer