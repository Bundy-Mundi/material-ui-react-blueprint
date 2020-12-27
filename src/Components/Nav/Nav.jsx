import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const S_AppBar = styled(AppBar)`
    background: ${({theme}) => theme.pallete.blue[500]};
    display: flex;
    flex-direction: row;
    justify-contents: center;
    align-items: space-between;

`;
const HomeLink = styled(Link)`
    margin: ${({theme}) => theme.spacing.xl};
    text-decoration: none;
`;
const S_Button = styled(Button)`
    margin: ${({theme}) => theme.spacing.xl};
`;
const S_NavLink = styled(NavLink)`
    text-decoration: none;
`;

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const theme = useContext(ThemeContext);
    return (
        <S_AppBar scolor={theme.pallete.primary} position="static" >
           <Toolbar>
             <IconButton edge="start" color="inherit" aria-label="menu">
               <MenuIcon />
             </IconButton>
             <HomeLink to="/">
                 Home
             </HomeLink>
           </Toolbar>
         </S_AppBar>
    )
};

export default Header;
