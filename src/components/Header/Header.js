import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../images/logo.png';
import { Button } from '@mui/material';

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#182f59',
        px:5,
        py:1.5
      }}
    >
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <img src={logo} alt='' width='60px' height='60px' />
            <Box sx={{ mx: 2 }}>  
              <Typography
                variant='h6'
                noWrap
                component='a'
                sx={{
                  display: 'block',
                  fontWeight: 700,
                  color: 'inherit',
                  textAlign:'start',
                }}
              >
                TechForing
              </Typography>
              <Typography
                variant='caption'
                noWrap
                component='a'
                sx={{
                  fontWeight: 400,
                  color: 'inherit',
                }}
              >
                Shaping Tomorrows Cybersecurity
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="outlined" sx={{
                px:'32px',
                color:'white',
                border:'1px solid white',
                mr:3,
                fontWeight:600,
                '&:hover':{
                    border:'1px solid white'
                }
            }}>SING IN</Button>
            <Button variant="contained" disableRipple
='true'
 sx={{
                px:'32px',
                fontWeight:600,
                backgroundColor:'rgb(91, 188, 46)',
                '&:hover':{
                    backgroundColor:'rgb(91, 188, 46)'

                }
            }}>SING UP</Button>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                
                  <Box width='100%' height='20px'>
                    <Typography textAlign='start' sx={{ lineHeight: '10px' }}>
                      Sign Out
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      textAlign='start'
                      sx={{ lineHeight: '10px' }}
                    >
                      Login
                    </Typography>
                  </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Header;
