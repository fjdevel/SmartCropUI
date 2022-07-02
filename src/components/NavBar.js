import React from "react";
import {Nav,NavLink,NavMenu} from "./NavbarElements";
import logo from './logo.png';
import styled from "styled-components";
import jwt_decode from "jwt-decode";

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

const clean = function(){
    localStorage.clear();
    window.location.href = "/";
}

const NavBar = ()=>{
    let store = localStorage.getItem("access_token");
    let jwt=null;
    if(store!=null)
        jwt = jwt_decode(store);
    if(jwt==null){
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
        );
    }else{
        let jwt = jwt_decode(localStorage.getItem("access_token"));
        if(jwt.roles[0]==="ROLE_SUPER_ADMIN"){
          return(  <>
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
                        <NavLink to="/dashboardAdmin" >
                            Dashboard
                        </NavLink>
                        <NavLink to="/users" >
                            Usuarios
                        </NavLink>
                        <NavLink to="/" onClick={clean}>
                            salir
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>);
          }
    }

};

export default NavBar;