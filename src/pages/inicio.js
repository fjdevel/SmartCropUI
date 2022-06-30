import React from 'react';
import './css/inicio.css';

const InicioPage = ()=>{
    return (
        <div className="container-fluid" id="home">
            <div className='row' id="contenidoHome">
                <div className='col-md-12'>
                        <a href='/registro' className='btn'>
                        Registrate
                        </a>
                </div>
            </div>
        </div>
    );
    };
    
    export default InicioPage;