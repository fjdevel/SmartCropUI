import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from "react";
import config from '../config.json';

const ContenedorPrincipal = styled.div`
    margin-top:85px ;
`;
const UserList = ()=>{
    const [list, setList] = useState([]);
    useEffect(() => {
        axios({
          url: config.SERVER_URL+'/api/admin/users',
        })
          .then((response) => {
            setList(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [setList]);
    console.log(list);
    
    return(
        <ContenedorPrincipal>
        <div className='row justify-content-md-center'>
            <h3 className='text-center'>Listado de usuarios</h3>
        <div className='col-md-10'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">username</th>
      <th scope="col">name</th>
      <th scope="col">roles</th>
    </tr>
  </thead>
  <tbody>
  {list.map((item) => (
    <tr>
    <th scope="row">{item.id}</th>
    <td>{item.username}</td>
    <td>{item.name}</td>
    <td>{item.roles[0].name}</td>
  </tr>
          
        ))}
    
    
  </tbody>
</table>
        </div>
        </div>
    </ContenedorPrincipal>
    )
};

export default UserList;
