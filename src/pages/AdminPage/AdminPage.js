import React from 'react';
import styled from "styled-components";
import {validarToken} from "../../helpers/helper";
const ContenedorPrincipal = styled.div`
    margin-top:85px ;
`;

const AdminPage = ()=>{
    if(validarToken){
        return (
            <ContenedorPrincipal>
                Admin
            </ContenedorPrincipal>
        );
    }else{
        window.location.href = "/";
    }
    
    };
    
    export default  AdminPage;