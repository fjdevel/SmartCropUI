import React from "react";
import loginImg from "../smartCropLogo.png";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>

        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Correo electonico</label>
              <input type="text" name="email" placeholder="Correo electonico" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="text" name="password" placeholder="Digite su contraseña" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Nombre completo</label>
              <input type="text" name="username" placeholder="Digite su nombre completo" />
            </div>
          </div>
        </div>
        <div className="footer d-flex justify-content-center w-100">
          <button type="button" className="color-container  fw-bold p-2 w-50">
          Registrarse
          </button>
        </div>
      </div>
    );
  }
}