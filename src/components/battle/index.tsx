import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import pokeBattleImg from '../../assets/pokebattle.gif';

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
    },
    mainImg: {
      [theme.breakpoints.down(600)]: {
        width: "100%",
      },
      textAlign: "center"
    }
  }),
);

const PokeBattleContainer = () => {
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
        <Grid item xs={12}>
          <img className={classes.mainImg} src={pokeBattleImg} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Pokemon Battle comming soon !!!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default PokeBattleContainer