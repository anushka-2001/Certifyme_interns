import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import './Footer.css';
function Footer
    () {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/*col 1*/}
                        <div className="col-md-4 col-sm-6">
                            <h4>About</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Team</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Feedback</a></li>

                            </ul>
                        </div>
                        {/*col 2*/}
                        <div className="col-md-4 col-sm-6">
                            <h4>Resources</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Newsletter</a></li>
                                <li><a href="/">Blog</a></li>


                            </ul>
                        </div>
                        {/*col3*/}
                        <div className="col-md-4 col-sm-6">
                            <h4>Follow Us on </h4>
                            <a href="https://twitter.com/getcertifyme" className="twitter social">  <FaTwitter size="2rem" /></a>

                            <a href="https://www.linkedin.com/company/getcertifyme/" className="linkedin social"><FaLinkedin size="2rem" /></a>
                            <a href="https://telegram.me/certifyme" className="telegram social"><FaTelegram size="2rem" /></a>
                        </div>
                    </div>
                    <span  > Copyright CertifyMe © 2020
Designed by team with ❤</span>
                </div>
            </div>
        </FooterContainer>

    )
}
export default Footer;
const FooterContainer = styled.footer`
.footer-middle
{
    background:var(--mainDark);
    padding-top:3rem;
    color:var(--mainWhite);
}
ul li a{
    color:var(--mainGrey);

}
ul li a:hover{
    color:var(--mainLightGrey);
}

`;
