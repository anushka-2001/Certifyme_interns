import React from 'react'
import './Navbar.css'
import logo from './L.png';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand ml-0" href="http://localhost:3000/">
                    <img src={logo} alt="logo " style={{ width: '260px' }} /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick="open"><div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0"> <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="https://certifyme.app/" target="_blank">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" target="_blank" href="https://certifyme.app/about-us/"> About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" target="_blank" href="https://blog.certifyme.app/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white " aria-current="page" target="_blank" href="https://certifyme.app/team_1/">Team</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white" target="_blank" href=" https://certifyme.springrecruit.com/careers">Careers</a>
                            </li></ul> 
                </div>
</span>
                </button>
                <div className="topnav-right">
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="https://certifyme.app/" target="_blank">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" target="_blank" href="https://certifyme.app/about-us/"> About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" target="_blank" href="https://blog.certifyme.app/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white " aria-current="page" target="_blank" href="https://certifyme.app/team_1/">Team</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white" target="_blank" href=" https://certifyme.springrecruit.com/careers">Careers</a>
                            </li>


                        </ul>
                    </div>
                </div>

            </div>
        </nav >
    )
}
export default Navbar;