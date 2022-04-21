import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Assistant from './components/Assistant';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles(() => ({
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'inherit',
  },
  Font: {
    fontFamily: 'Chilanka',
    variant: 'h2',
    align: 'center',
    color: '#65ee48',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.Font}>SANPHIRE-(Video Chat)</h1>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      <Assistant />
    </div>
  );
};

export default App;
