import React from 'react'
import {AppBar , Toolbar, styled } from '@mui/material'

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: darkblue
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none
`;
const Navbar = () => {
  return (
    <Header position="static">
        <Toolbar>
          <Tabs>Student Record</Tabs>
          <Tabs to='/'>Home</Tabs>
          <Tabs to='/all'>All Users</Tabs>
          <Tabs to='/add'>Add New User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar
