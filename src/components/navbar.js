import React from 'react';
import Logo from '../resources/MoneyMatters.jpg'
import { IoMdHome, IoMdDocument, IoMdContacts } from 'react-icons/io';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <div className="wrapper">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className='navbar-brand'><img src={Logo} alt='MoneyMatters' style={{height: '50px'}}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className='nav-link'><i className="fa-solid fa-house" style={{color: '#71a1f4'}}></i>  Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to='/Ingreso' className='nav-link'><i className="fa-solid fa-hand-holding-dollar" style={{color: '#71a1f4'}}></i> Nuevo ingreso</Link>
              </li>
              <li className="nav-item">
                <Link to='/Gasto' className='nav-link'><i class="fa-solid fa-sack-dollar" style={{color: '#71a1f4'}}></i> Nuevo gasto</Link>
              </li>
              <li className="nav-item">
                <Link to='/OCRapp' className='nav-link'><i class="fa-solid fa-camera" style={{color: '#71a1f4'}}></i> OCR</Link>
              </li>
            </ul>
            <Link to="/" className='btn btn-outline-primary' >Iniciar Sesión</Link>
          </div>
        </div>
      </nav>
    </div>
 );
};

export default Navbar;