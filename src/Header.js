import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Header.css';
import { isAuth as realyIsAuth, login, logout } from './auth';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

// Создаем тему Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40', // Основной темно-зеленый цвет
      darker: '#00372E', // Темнее основного цвета для hover
    },
  },
});

function Header(props) {
  let set_logout = {props}.props.setLoading;
  let setIsAuth = {props}.props.setIsAuth;
  const handler = async() => {
    const result1 = logout();
    set_logout(result1.data);
    setIsAuth(result1.data);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="Header" style={{ backgroundColor: theme.palette.primary.main, color: '#fff' }}>
        <Typography variant="h1">ЗЕМЛЕХАБ</Typography>
        <Typography variant="subtitle1">Зростають знання - зростає твоя інвестиція</Typography>
        <div className='Log'>
          <Button
            variant="contained"
            color="primary"
            onClick={handler}
            sx={{
              backgroundColor: theme.palette.primary.darker,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Вийти
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Header