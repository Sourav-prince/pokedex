import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {setSidebar} from "../../reducers/reducer";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  links: {
    textDecoration: "none",
    color: "#000"
  }
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const SideBar = (props:any) => {
  const classes = useStyles();
  const [state, setState] = useState(false);
  
  //drawer control
  useEffect(()=>{
    if(props.appstate.sidebar_open){
      console.log('drawer')
      toggleDrawer(true);
    }
  },[props.appstate.sidebar_open])

  const toggleDrawer = (open: boolean) => {
    if(!open){
      props.setSidebar(false)
    }
    setState(open);
  };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={()=>{toggleDrawer(false)}}
      onKeyDown={()=>{toggleDrawer(false)}}
    >
      <List>
        <ListItem>
          <ListItemText primary={"POKEDEX DEMO"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/" className={classes.links}>
          <ListItem button>
            <ListItemIcon> <InboxIcon /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to="/battle" className={classes.links}>
          <ListItem button>
            <ListItemIcon> <InboxIcon /></ListItemIcon>
            <ListItemText primary={"Poke Battle"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Drawer anchor={'left'} open={state} onClose={()=>{toggleDrawer(false)}}>
        {list('left')}
      </Drawer>
    </React.Fragment>
  );
}
export default connect(
  state => ({
    appstate: state
  }),
  dispatch => ({
    setSidebar: bindActionCreators(setSidebar, dispatch)
  })
)(SideBar);
