import React from 'react'
import './Header.css'
import { MainLogo, manu } from '../../../Assats/photos'

const Header = () => {
    return (
        <div>
            <nav class="navbar  navbar-expand-lg ">
                <img src={MainLogo} className='logo' alt="" />
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navContant" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <button class="nav-link btn btnNavLink ">  <h4> Home  </h4></button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btnNavLink  ">  <h4> About Us  </h4></button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btnNavLink ">  <h4> Product  </h4></button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btnNavLink ">  <h4> Contact Us  </h4></button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btnNavLink ">  <h4> Pre Book Now  </h4></button>
                        </li>
                    </ul>
                </div>

            </nav>


        </div>
    )
}

export default Header



