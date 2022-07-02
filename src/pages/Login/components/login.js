import React from "react";
import loginImg from "../smartCropLogo.png";
import axios from 'axios';
import config from '../../../config.json';
import jwt_decode from "jwt-decode";


export class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    
  }


  HandleSubmit(event) {
    // Prevent page reload
    event.preventDefault();
    var { username, password } = document.forms[0];
    const params = new URLSearchParams();
    params.append('username',  username.value);
  params.append('password', password.value);
    axios.post(config.SERVER_URL+'/api/login', params)
    .then(function (response) {
      if(response.status===200){
        if(response.data.access_token !==null || response.data.access_token !==""){
          localStorage.setItem("access_token",response.data.access_token);
          let jwt = jwt_decode(localStorage.getItem("access_token"));
          
          if(jwt.roles[0]==="ROLE_SUPER_ADMIN"){
            window.location.href = "/dashboardAdmin";
          }
        }
      }
    });
   
  };
  

  render() {
    
    return (
      <form onSubmit={this.HandleSubmit}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username" className="mb-1 color-text">Digite su usuario</label>
              <input type="text" name="username" placeholder="Digite su usuario" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="mb-1 color-text">Digite su contraseña</label>
              <input type="password" name="password" placeholder="Digite su contraseña" />
            </div>
          </div>
        </div>
        <div className="footer d-flex justify-content-center w-100">
          <button type="submit" className="color-container  mx-2 fw-bold p-2 w-50">
            Iniciar sesión
          </button>
          {/* <button type="button" className="color-container mx-2 fw-bold p-2 w-50">
            Registrarse
          </button> */}
        </div>
      </div></form>
    );
  }
}