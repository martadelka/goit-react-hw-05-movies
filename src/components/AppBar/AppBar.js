import { Box } from '../Box';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme';
import { AppBarList, AppBarItem, AppBarTitle } from './AppBar.styled';

export default function AppBar() {
  return (
    <Box
      as="header"
      p={3}
      bg={theme.colors.bg_dark}
    >
      <AppBarTitle to="/">Movies</AppBarTitle>
      <AppBarList>
        <AppBarItem>
          <NavLink to="/">Home</NavLink>
        </AppBarItem>
        <AppBarItem>
          <NavLink to="/movies">Movies</NavLink>
        </AppBarItem>
      </AppBarList>
    </Box>
  );
}