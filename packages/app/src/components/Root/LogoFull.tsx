import React from 'react';
import { makeStyles } from '@material-ui/core';
import img from '../../../public/logo.png';
const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  return <img src="/logo.png" alt="Logo" width={122} height={39} />;
};

export default LogoFull;
