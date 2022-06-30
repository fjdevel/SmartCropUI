import React from "react";
import {Nav,NavLink,NavMenu} from "./NavbarElements";
import logo from './logo.png';
import styled from "styled-components";

const LogoInicial =  styled.div`
    margin-left:50px;
    text-align:center;
    img{
        max-width:50px;
        margin:auto;
    }
    h3{
        color:#81A632;
    }
`;

const NavBar = ()=>{
return(
    <>
        <Nav>
            <div>
            <LogoInicial>
                <img src={logo} alt="logo"/>
                <h3>Smart Crop</h3>
            </LogoInicial>
            </div>
            <NavMenu>
                
                <NavLink to="/" >
                    Inicio
                </NavLink>
                <NavLink to="#caracteristicas" >
                    Caracteristicas
                </NavLink>
                <NavLink to="/login" >
                    Login
                </NavLink>
            </NavMenu>
        </Nav>
    </>
)
};

export default NavBar;