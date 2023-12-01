import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import AppBar from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <main>{<Outlet />}</main>
    </ThemeProvider>
  );
};