import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import DashBoardButton from "./DashBoardButton.jsx";

const S_AppBar = styled(AppBar)`
    background: ${({theme}) => theme.pallete.blue[500]};
    display: flex;
    flex-direction: row;
    justify-contents: center;
    align-items: space-between;
    height: 5rem;
`;
const HomeLink = styled(Link)`
    margin: ${({theme}) => theme.spacing.xl};
    text-decoration: none;
    color: white;
`;
const S_NavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
`;
const S_Drawer = styled(Drawer)`
    /*background-color: ${({theme})=>theme.pallete.blue[100]} !important;*/
    background-color: #fff;
`;
const S_List = styled(List)`
    /*background-color: ${({theme})=>theme.pallete.blue[100]} !important;*/
    height: 100vh;
    background-color: #fff;
`;
const S_ListItem = styled(ListItem)`
    width: 250px;
`;

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const theme = useContext(ThemeContext);
    return (
        <S_AppBar scolor={theme.pallete.primary} position="static" >
           <Toolbar>
             <IconButton onClick={toggleDrawer} onKeyDown={toggleDrawer} edge="start" color="inherit" aria-label="menu">
               <MenuIcon/>
               <S_Drawer anchor={"left"} open={open} onClose={toggleDrawer} onKeyDown={toggleDrawer}>
                   <S_List onClick={toggleDrawer}>{
                   [ "Menu One", "Menu Two", "Menu Three" ].map((text, key)=>
                       (
                           <>
                           <S_ListItem key={key}>
                               <ListItemIcon ><MailIcon key={key}/></ListItemIcon>
                               <ListItemText >
                                   <S_NavLink  to="/samplelink" style={{color:"black"}}>
                                       <Typography>{text}</Typography>
                                   </S_NavLink>
                               </ListItemText>
                           </S_ListItem>
                           <Divider key={key}/>
                           </>
                       )
                   )}</S_List>
               </S_Drawer>
             </IconButton>
             <HomeLink to="/">
                 <IconButton>
                     <HomeIcon/>
                 </IconButton>
             </HomeLink>
           </Toolbar>
           <Toolbar>
               <DashBoardButton/>
           </Toolbar>
         </S_AppBar>
    )
};

export default Header;
