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
        <Grid item xs={8}>
          <Pokedex/>
        </Grid>
        <Grid item xs={4}>
          <Searcher/>
        </Grid>
      </Grid>
    </Container>
  )
}
export default MainContainer